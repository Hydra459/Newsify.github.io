import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { SearchNews, HeadLines } from '../action';
import { FaSearch } from 'react-icons/fa';
class NewsifySearch extends React.Component {

    // componentDidMount = () => {
    //     this.props.HeadLines()
    // }

    renderInput = ({ input, label, meta }) => {
        return (

            <div>
                <div className="search__heading">
                    {label}
                </div>
                <div className="search__main">
                    <div className="search__primary">
                    <input {...input} autoComplete="off" className="search__primary-input" />
                    </div>
                    <div className="search__secondary">
                            <button className="search__button"><FaSearch className="search__icon" /></button>
                    </div>
                </div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.SearchNews(formValues.NewsifySearch);
    };

    render() {
        console.log(this.props.news)
        return (
            <div className="search">
                <form className="search__container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="search__main">
                        <Field name="NewsifySearch" component={this.renderInput} label="Search News"/>
                    </div>
                </form>
            </div>
        )
    }
}

const formWrapped = reduxForm({
    form: 'NewsifySearch'
})(NewsifySearch);

const mapStateToProps = state => {
    return { news: state.newsReducer }
}

export default connect(mapStateToProps, { SearchNews })(formWrapped);

// export default NewsifySearch;