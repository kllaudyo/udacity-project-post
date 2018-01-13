export const
    INIT_CATEGORIES = 'INIT_CATEGORIES',
    INIT_POSTS = 'INIT_POSTS';

export const
    initCategories = ({categories}) => ({
        type: INIT_CATEGORIES,
        categories
    }),
    initPosts = ({posts}) => ({
        type: INIT_POSTS,
        posts
    });