import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers)

    const createPageNumbers = () => {
        pageNumbers.map(number => {
            return(                    
                 <Link className="content__headlines-link" onClick={() => paginate(number)} href='!#'>
                     {number}
                 </Link>
            )
         })
    }

    return (
        <div className='content__headlines-position'>
            {
            pageNumbers.map(number => {
                return(     
                    <div className='content__headlines-position'>               
                     <Link className="content__headlines-link" onClick={() => paginate(number)} href='!#'>
                         {number}
                     </Link>
                     </div>
                )
             })    
            }
        </div>
    )
}

export default Pagination;