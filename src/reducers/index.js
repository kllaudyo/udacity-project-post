import { combineReducers } from 'redux';

const categories = ( state = [], action ) => {
    switch (action.type){
        default:
            return state;
    }
};

const posts = ( state = [], action ) => {
    switch (action.type){
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