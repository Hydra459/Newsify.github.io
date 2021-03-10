import React from 'react';
// import searchIcon from 'img/sprite.svg#icon-search';
import image from './img/img.jpg'
import { connect } from 'react-redux';
import NewsifySearch from './NewsifySearch';
import NewsifyReviews from './NewsifyReviews';
import { SearchNews, fetchLocation, fetchWeather } from '../action';
import NewsifyRecords from './NewsifyRecords';
import Spinner from './Spinner';

class NewsifyMain extends React.Component {
    componentDidMount() {
        this.props.fetchLocation();
    }



    displayImg = (news) => {
        if (news.length == 0) {
            return <Spinner />
        }
            return <img src={news[0].urlToImage} alt="image" className="featured__image-item" /> 
    }

    displayTitle = (news) => {
        if (news.length == 0) {
            return (
                <span className="featured__text-main-primary">
                <Spinner />
            </span>
            ) 
        }
            return (
                <span className="featured__text-main-primary">
                        <b>{news[0].title}</b>
                    </span>
            )
    }

    displayDes = (news) => {
        if (news.length == 0) {
            return (
                <span className="featured__text-main-secondary">
                    <Spinner />
                </span>
            ) 
        }
            return (
                <span className="featured__text-main-secondary">
                    {news[0].description} 
                    <a href={news[0].url}>Read more</a>
                </span>
            )
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    };

    componentDidUpdate (prevProps) {
        if(prevProps.country !== this.props.country) {
            this.props.SearchNews(this.props.country)
        }
    }

    renderCountry = () => {
        this.props.fetchWeather(this.props.location);
    }

    renderFeatured = (news) => {
        if (news.length == 0) {
            return <Spinner />
        }

        return (
            <div className="featured__box">
                 <div className="featured__post">
                <p className="featured__post-text">
                    featured post
                </p>
            </div>
            <div className="featured__image">
            <img src={news[0].urlToImage} alt="image" className="featured__image-item" />
                </div>
                <div className="featured__text">
                    <div className="featured__text-time">
                        <p className="paragraph">
                            {news[0].publishedAt}
                        </p>
                    </div>
    
                    <div className="featured__text-main">
                    <span class="featured__text-main-primary">
                        {news[0].title}
                    </span>
                    <span class="featured__text-main-secondary">
                        {news[0].description}
                    </span>
                    </div>
                </div>
                </div>
        )
    }
    render() {
        this.renderCountry()
        console.log(this.props.location);
        console.log(this.props.country);
        console.log(this.props.headlines);

        return (
            <div>
            <NewsifySearch/>
        <div className="featured">
            {/* <div className="featured__box">
            <div className="featured__post">
                <p className="featured__post-text">
                    featured post
                </p>
            </div>
                <div className="featured__image">
                    { this.displayImg(this.props.news)}
                </div>
                <div className="featured__text">
                    <div className="featured__text-time">
                        <p className="paragraph">
                           {this.props.news[0].publishedAt}
                        </p>
                    </div>
    
                    <div className="featured__text-main">
                        { this.displayTitle(this.props.news) }
                        { this.displayDes(this.props.news) }
                    </div>
                </div>
            </div> */}

            {this.renderFeatured(this.props.news)}

        </div>

        
        <div className="important">
            <div className="important-container">
                <div className="important__text">
                    <b>never miss a new post.</b>
                </div>
    
    
                <div className="important__form">
                    <div className="important__form-input">
                    <p className="important__form-input--placeholder">Enter your email *</p>
                    <div className="important__form-priamry">
                        <input type="text" className="important__form-input--main" />
                        <a className="important__form-btn" href="#">Subscribe</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <NewsifyRecords />
        <NewsifyReviews onSubmit={this.onSubmit} />
    </div>
        )
    }
}

const mapStateToProps = state => {
    return { news: Object.values(state.newsReducer), location: state.location, country: state.weather }
}

export default connect(mapStateToProps, { SearchNews,fetchLocation,fetchWeather })(NewsifyMain);
