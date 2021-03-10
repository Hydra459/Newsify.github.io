import React from 'react';
import { Link } from 'react-router-dom';
import UserImg from './img/user.jpg'
import User1 from './img/user-1.jpg';
import User2 from './img/user-2.jpg';
import User3 from './img/user-3.jpg';
import User4 from './img/user-4.jpg';
import User5 from './img/user-5.jpg';
import User6 from './img/user-6.jpg';
import myPick from './img/hotel-3.jpg';
import instagram from './img/instaicon.jpg';
import facebook from './img/fbicon.jpg';
import pintrest from './img/pintresticon.jpg';
import twitter from './img/twitericon.jpg';
import { Field, reduxForm } from 'redux-form';

class NewsifyContent extends React.Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <div>
                    <p className="content__subscribe-form--placeholder">{label}</p>
                </div>
                <div>
                    <input {...input} autoComplete="off" className="content__subscribe-form--main" />
                </div>
            </div>
        );
    };

    render() {
    return (
        <div className="content__about">
            <div className="content-heading">About</div>
            <div className="content__about-info">
            <div className="content__aboutme">
                <div className="content__img">
                    <img src={UserImg} className="content__aboutme-img" alt="content image" />
                </div>

                <p className="content__aboutme-paragraph">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>

                <Link to={`Newsify/About/`} className="content__aboutme-button" >Read More</Link>
                </div>

                <div className="content-heading">Our Staff</div>
                    <div className="content__ourstaff">
                    <div className="content__ourstaff-images">
                    <div className="content__ourstaff-table">
                            <div className="content__ourstaff-table--data">
                                <img src={User1} alt="User 1" className="content__ourstaff-userImg" />
                            <figcaption className="content__ourstaff-caption">Samuel Anderson</figcaption> 
                            </div>
                        <div className="content__ourstaff-table--data">
                            <img src={User2} alt="User 2" className="content__ourstaff-userImg" />
                            <figcaption className="content__ourstaff-caption">Mary Smith</figcaption> 
                        </div>
                        
                    </div>

                    <div className="content__ourstaff-table">
                            <div className="content__ourstaff-table--data">
                                <img src={User3} alt="User 1" className="content__ourstaff-userImg" />
                            <figcaption className="content__ourstaff-caption">Paul James</figcaption> 
                            </div>
                        <div className="content__ourstaff-table--data">
                            <img src={User4} alt="User 2" className="content__ourstaff-userImg" />
                            <figcaption className="content__ourstaff-caption">Larry Wilson</figcaption> 
                        </div>
                        
                    </div>

                    <div className="content__ourstaff-table">
                            <div className="content__ourstaff-table--data">
                                <img src={User5} alt="User 1" className="content__ourstaff-userImg" />
                            <figcaption className="content__ourstaff-caption">Jordan Befort</figcaption> 
                            </div>
                        <div className="content__ourstaff-table--data">
                            <img src={User6} alt="User 2" className="content__ourstaff-userImg" />
                            <figcaption className="content__ourstaff-caption">Sara Larson</figcaption> 
                        </div>
                    </div>
                    </div>

                    <div className="content__ourstaff-icons">
                        <Link to="/" className="content__ourstaff-icons--link">
                            <img src={instagram} alt="facebook" />
                        </Link>
                        <Link to="/" className="content__ourstaff-icons--link">
                            <img src={facebook} alt="instagram" />
                        </Link>
                        <Link to="/" className="content__ourstaff-icons--link">
                            <img src={twitter} alt="twitter" />
                        </Link>
                        <Link to="/" className="content__ourstaff-icons--link">
                            <img src={pintrest} alt="pintrest" />
                        </Link>
                    </div>
                </div>

                <div className="content-heading">Subscribe</div>
                <div className="content__subscribe">
                    <div className="content__subscribe-form">
                        <form>
                        <Field name="formSubmit" component={this.renderInput} label="Enter your email *"/>
                        </form>
                        <div>
                            <Link to="/" className="content__subscribe-form--btn">Subscribe</Link>
                        </div>
                    </div>
                </div>

                <div className="content-heading content__mypick-heading">My Pick of the month</div>
                <div className="content__mypick">
                    <div className="content__img">
                        <img src={myPick} className="content__mypick-img" alt="content image" />
                    </div>

                    <p className="content__mypick-paragraph">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>

                    <Link to="/" className="content__mypick-button">
                        Read More 
                    </Link>
                </div>
            </div>
        </div>
    )};
};

export default reduxForm({ form: 'formSubmit' })(NewsifyContent);