import { combineReducers } from 'redux';
import {INIT_CATEGORIES, INIT_POSTS} from '../actions';

const categories = ( state = [], action ) => {
    const { categories } = action;
    switch (action.type){
        case INIT_CATEGORIES:
            return categories;
        default:
            return state;
    }
};

const posts = ( state = [], action ) => {
    const { posts } = action;
    switch (action.type){
        case INIT_POSTS:
            return posts;
        default:
            return state;
    }
};

const comments = ( state = [], action ) => {
    switch (action.type){
        default:
            return state;
    }
};

export default combineReducers({categories, posts, comments});