import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up';
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-down';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

const PostView = ({post = {}, history}) => {
    const {title = "", body=""} = post;
    return (
        <React.Fragment>
            <Menu>
                <MenuItem onSelect={() => history.push('/') } selectedIndex={null} index="back" ><ArrowLeftIcon color="white"/></MenuItem>
                <MenuItem onSelect={()=>alert('teste click')} selectedIndex={null} index="thumb-up" ><ThumbsUpIcon color="white" /></MenuItem>
                <MenuItem onSelect={()=>alert('teste click')} selectedIndex={null} index="thumb-down" ><ThumbsDownIcon color="white" /></MenuItem>
            </Menu>
            <div className="container post">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </React.Fragment>
    )
};

PostView.propTypes = {
    id: PropTypes.string.isRequired
};

const mapStateToProps = ({posts}, ownProps) => ({
    post : posts.filter(post => post.id === ownProps.id).shift(),
    ownProps
});

export default withRouter(connect(mapStateToProps)(PostView));