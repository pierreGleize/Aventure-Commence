import React from 'react';
import './Card.css'
import Carditem from './Carditem';

const Card = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <Carditem 
                       src='/images/img-9.jpg'
                       text="Explore the hidden waterfall deep inside the Amazon Jungle"
                       label="Adventure"
                       path="/services"
                       />
                       <Carditem 
                       src='/images/img-2.jpg'
                       text="Travel to the Islands of Bali in a Private Cruise"
                       label="Luxury"
                       path="/services"
                       />
                    </ul>
                    <ul className="cards__items">
                       <Carditem 
                       src='/images/img-3.jpg'
                       text="Set Sail in the Atlantic Ocean visiting Uncharted Waterse"
                       label="Mystery"
                       path="/services"
                       />
                       <Carditem 
                       src='/images/img-4.jpg'
                       text="Experience Football on Top of the Himilayan Mountainse"
                       label="Adventure"
                       path="/services"
                       />
                       <Carditem 
                       src='/images/img-8.jpg'
                       text="RIDE through the Sahara Desert on a guided cal tour"
                       label="Adrenaline"
                       path="/services"
                       />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;