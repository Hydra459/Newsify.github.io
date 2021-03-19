import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewsifyContent from './NewsifyContent';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import Pagination from './Pagination';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

// class NewsifyRecords extends React.Component {

//     renderList() {
//         return this.props.news.map(curr => {
//             return (
//                     <div className="content__headlines-info">
//                     <div className="content__img">
//                             <img src={curr.urlToImage} className="content__image" alt="content image" />
//                         </div>
//                         <div className="content__text">
//                             <div className="content__text-paragraph content__text-time">
//                                 <span className="context__text-time--month">Jan</span>
//                                 <span className="context__text-time--point">.</span>
//                                 <span className="context__text-time--hour">1 min</span>
//                             </div>
//                             <div className="content__text-main">
//                                 <Link to={`/Newsify/${curr.id}`} className="content__text-main--link">
//                                     <h3 className="content__text-main--heading">{curr.title}</h3>
//                                     {/* <p className="content__text-main--paragraph">{curr.description}</p> */}
//                                 </Link>
//                             </div>
//                             <div className="content__text-paragraph content__text-reviews">
//                                 <span className="context__text-reviews--views">2 views</span>
//                                 <span className="context__text-reviews--comments">0 comments</span>
//                             </div>
//                         </div>
//                     </div>
//             )
//         })
//     }

//     render() {
//     console.log(this.props.news)
//     if (!this.props.news) {
//         return <Spinner />
//     }
//         return (
//             <div className="content">
//                 <div className="content-container">
//                 <div className="content__headlines">
//                 <div className="content-heading">HeadLines</div>
//                 {this.renderList()}
//                 </div>

//                 <NewsifyContent />
//                 </div>
//             </div>
//         )   
// }
// }

// const mapStateToProps = state => {
//     return { news: Object.values(state.newsReducer) }
// }

// export default connect(mapStateToProps, null )(NewsifyRecords);

const NewsifyRecords = () => {
    const headlines = Object.values(useSelector(state => state.newsReducer));
    const [visible, setVisible] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = headlines.slice(indexOfFirstPost, indexOfLastPost);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const renderList = () => {
                return(
                    <div>
                        <div className="content__headlines-info--container">
                    {currentPosts.slice(0,visible).map(curr => {
                    return (
                        <div key="curr.id">
                            <div className="content__headlines-info">
                            <div className="content__img">
                                    <img src={curr.urlToImage} className="content__image" alt="content image" />
                                </div>
                                <div className="content__text">
                                    <div className="content__text-paragraph content__text-time">
                                        <span className="context__text-time--month">{curr.publishedAt.slice(8,10)} . </span>
                                        <span className="context__text-time--point">{months[curr.publishedAt.slice(6,7)]} . </span>
                                        <span className="context__text-time--hour">{curr.publishedAt.slice(0,4)}</span>
                                    </div>
                                    <div className="content__text-main">
                                        <Link to={`/Newsify/${curr.id}`} className="content__text-main--link">
                                            <h3 className="content__text-main--heading">{curr.title}</h3>
                                            {/* <p className="content__text-main--paragraph">{curr.description}</p> */}
                                        </Link>
                                    </div>
                                    <div className="content__text-paragraph content__text-reviews">
                                        <span className="context__text-reviews--views">favourite</span>
                                        <span className="context__text-reviews--comments"><FaRegHeart /></span>
                                    </div>
                                </div>
                            </div>
                            </div>
                            )})}
                            </div>

                            {/* {renderBtn(headlines)} */}
                            {/* <div className='content__headlines-position'> */}
                            <Pagination postsPerPage={postsPerPage} totalPosts={headlines.length} paginate={paginate}/>
                            {/* </div> */}
                </div>
                )
            }
            
            if (headlines !== null) {
                return (
                    <div className="content">
                        <div className="content-container">
                            <div className="content__headlines">
                                <div className="content-heading">HeadLines</div>
                                {renderList()}
                            </div>
                            <NewsifyContent />
                        </div>
                    </div>
                    )      
            } else {
                <Spinner />
            }
        }
        
        export default NewsifyRecords;

            // const renderShow = (curr) => {
            //     if (curr > 6) {
            //         return (
            //                 <button className="content__headlines-button" onClick={(() => {
            //                 setVisible((prevValue) => prevValue - 6);
            //             })}>Show less</button>
            //         )
            //     }
            //     return null
            // }

            // const renderBtn = (current) => {
            //     if (current[visible]) {
            //         return (
            //             <div className="content__headlines-position">
            //                 <div className="content__headlines-block">
            //                 <button onClick={(() => {
            //                 setVisible((prevValue) => prevValue + 6);
            //             })} className="content__headlines-button">See more</button>
            //             </div>
            //             <div className="content__headlines-block">
            //             {renderShow(visible)}
            //             </div>
            //             </div>
            //         )
            //     } 
            //     return <div>end</div>
            // }