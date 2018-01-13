import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ index, onSelect, children, selectedIndex }) => (
    <button
        className={index===selectedIndex?"active":null}
        onClick={(e)=>{
            e.preventDefault();
            onSelect(index);
        }}>
        {children}
    </button>
);

MenuItem.propTypes = {
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    selectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect : PropTypes.func
};

export default MenuItem;