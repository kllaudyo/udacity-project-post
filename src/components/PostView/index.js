import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up';
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-down';
import { getCommentsByPost } from '../../utils/api';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
import Comment from '../Comment';


class PostView extends Component{

    constructor(props){
        super(props);
        this.state = {
            comments : []
        }
    }

    componentDidMount(){
        const { id } = this.props;
        getCommentsByPost(id)
            .then(response => {
                console.log(response);
                this.setState({comments:response})
            });
    }

    render(){
        const {post = {}, history} = this.props;
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
                    {this.state.comments.map(comment => (<Comment key={comment.id} text={comment.body} />))}
                </div>
            </React.Fragment>
        );
    }
}

PostView.propTypes = {
    id: PropTypes.string.isRequired
};

const mapStateToProps = ({posts}, ownProps) => ({
    post : posts.filter(post => post.id === ownProps.id).shift(),
    ownProps
});

export default withRouter(connect(mapStateToProps)(PostView));