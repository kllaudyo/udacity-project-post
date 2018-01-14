import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

//Todo: Linkar o componente para a API
const PostView = ({post = {}, history}) => {
    const {title = "", author = ""} = post;
    return (
        <React.Fragment>
            <Menu>
                <MenuItem onSelect={() => history.push('/') } selectedIndex={null} index="back" ><ArrowLeftIcon color="white"/></MenuItem>
                <MenuItem onSelect={()=>alert('teste click')} selectedIndex={null} index="thumb" ><ThumbsUpIcon color="white" /></MenuItem>
            </Menu>
            <div className="container post">
                <h2>{title}</h2>
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