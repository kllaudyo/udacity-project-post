import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Comment = (props) => (
    <p className="Comment">{props.text}</p>
);

Comment.propTypes = {
    text: PropTypes.string.isRequired
};

export default Comment;