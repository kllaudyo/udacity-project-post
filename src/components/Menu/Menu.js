import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Menu = (props) => (
    <div className="Menu">
        {props.children}
    </div>
);

Menu.propTypes = {
    children: PropTypes.array
};

export default Menu;
