import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';


const PostView = props => (
    <React.Fragment>
        <Menu>
            <MenuItem onSelect={()=>alert('teste click')} selectedIndex={null} index="back" ><ArrowLeftIcon color="white"/></MenuItem>
            <MenuItem onSelect={()=>alert('teste click')} selectedIndex={null} index="thumb" ><ThumbsUpIcon color="white" /></MenuItem>
        </Menu>
        <div className="container">
            Ola
        </div>
    </React.Fragment>
);

PostView.propTypes = {
    id: PropTypes.string.isRequired
};

export default PostView;