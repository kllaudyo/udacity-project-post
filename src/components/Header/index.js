import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Header = props => (
    <div className="Header">
        <h1 className="logo">{ props.brand }</h1>
    </div>
);

Header.propTypes = {
    brand: PropTypes.string.isRequired
};

export default Header;
