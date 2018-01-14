import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './avatar.png';
import './index.css';

const Card = props => (
    <div className="Card">
        <div className="Card-Container">
            <div className="Card-Title">
                <img src={Avatar} alt="Dr.Rihno" width="96px" height="96px" />
                <strong>{props.title}</strong>
            </div>
            <div className="Card-Body">
                {props.desc}
            </div>
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default Card;