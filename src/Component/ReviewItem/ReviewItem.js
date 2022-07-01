import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({review, handleRemoveItems}) => {
    const {img,name,price,shipping,quantity} = review;
    return (
        <div className='reviewItems'>
            <div className='review_img'>
                <img src={img} alt="" />
            </div>
            <div className='review_items'>
            <h3 className='name' title={name}>
            {name.length > 20 ? name.slice(0,25) + '...': name}
            
            </h3>
            <p className='review_info'>Price : <span className='span'>${price}</span></p>
            <p className='review_info'>Shipping Charge : <span className='span'>${shipping}</span> </p>
            <p className='review_info'>Quantity : <span className='span'>${quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveItems(review)} className='review-icon'>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;