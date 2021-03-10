import React from 'react';
import { SearchNews, fetchWeather, fetchLocation } from '../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewsifyReviews from './NewsifyReviews';
import fbSmall from './img/fb-small.jpg';
import instaSmall from './img/insta-small.jpg';
import pintrestSmall from './img/printrest-small.jpg';
import twitterSmall from './img/twitter-small.jpg';
import Spinner from './Spinner';

class NewsifyShow extends React.Component {
    componentDidMount() {
        // const { id } = this.props.match.params
        this.props.fetchLocation()
    }

    renderCountry = () => {
        this.props.fetchWeather(this.props.location);
        // this.renderHedlines()
    }

    componentDidUpdate (prevProps) {
        if(prevProps.country !== this.props.country) {
            this.props.SearchNews(this.props.country)          
        }
    }
    
    render() {
        this.renderCountry()
        console.log(this.props.headline);
        if(!this.props.headline){
                        return <Spinner/>
                    }
        return (
            <div>
            <div className="main__article">
            <div className="articles__container">
                <div className="articles">
                <div className="articles__box">
                    <div className="articles__image">
                        <img src={this.props.headline.urlToImage} className="articles__image-img" alt="image" />
                    </div>
                    <div className="articles__main">
                        <div className="articles__text">
                            <h3 className="articles__text-heading">{this.props.headline.title}</h3>
                            <p className="articles__text-paragraph"></p>
                            <h3 className="articles__text-heading"></h3>
                            <p className="articles__text-paragraph">{this.props.headline.description} <a className="articles__text-btn" href={this.props.headline.url} target="blank">Read More</a></p>
                        </div>
                        <div className="articles__icons">
                            <div className="articles__icons-primary">
                            <img src={fbSmall} alt="facebook" />
                            <img src={instaSmall} alt="instagram" />
                            <img src={pintrestSmall} alt="pintrest" />
                            <img src={twitterSmall} alt="twitter" />
                            </div>
                            <div className="articles__icons-secondary">
                            <p className="articles__icons-secondary--date">{this.props.headline.publishedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <NewsifyReviews />
    </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { country: state.weather, location: state.location, headline: state.newsReducer[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchLocation, fetchWeather, SearchNews })( NewsifyShow);

