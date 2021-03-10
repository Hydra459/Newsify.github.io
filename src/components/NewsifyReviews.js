import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class NewsifyReviews extends React.Component {
    renderFirstName =({ input, label }) => {
        return (
            <div className="form__primary-field">
                <label>{label}</label><br/>
                <input {...input} autoComplete="off" className="form__primary-field--input" />
            </div>
        )
    }

    renderLastName =({ input, label }) => {
        return (
            <div className="form__primary-field">
                <label>{label}</label><br/>
                <input {...input} autoComplete="off" className="form__primary-field--input" />
            </div>
        )
    }

    renderEmail =({ input, label }) => {
        return (
            <div className="form__secondary-field">
                <label>{label}</label>
                <input {...input} autoComplete="off" className="form__secondary-field--input" />
            </div>
        )
    }

    renderMessage =({ input, label }) => {
        return (
            <div className="form__secondary-field">
                <label>{label}</label>
                <textarea {...input} autoComplete="off" className="form__secondary-field--input" />
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <div>
            <div className="form">
                <div className="form__container">
                <div className="form__heading">
                    <h1>Drop Me a Line, Let Me Know What You Think</h1>
                </div>
                <form className="form__container-pack" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="form__primary">
                    <Field name="firstName" component={this.renderFirstName} label="First name:"></Field>  
                    <Field  name="lastName" component={this.renderLastName} label="Last name:"></Field>
                    </div>
                    <div className="form__secondary">
                    <Field name="email" component={this.renderEmail} label="email"></Field>
                    <Field name="message" component={this.renderMessage} label="message"></Field>    
                    </div>                
                </form>
                </div>
                </div>
                <div class="form__btn">
                        <a class="form__btn-button" href="#">Submit</a>
                </div>
            </div>
        );
    };
};

export default reduxForm({ form: 'ReviewSubmit' })(NewsifyReviews);