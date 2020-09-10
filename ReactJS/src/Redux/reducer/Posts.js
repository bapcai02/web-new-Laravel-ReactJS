import * as Types from '../constand/ActionType';


const initialState = {
    new_post:[],
    post_recent:[],
    post_talk:[],
    post_top:[],
    post_dev:[],
    post_tech:[],
    post_random:[],
    post_one: {},
    post_category: [],
};

const postsReducer = (state=initialState,action) => {
    switch (action.type) {
        case Types.SELECT_NEW_POSTS:{
            return {...state,new_post:[...action.posts]};
        }

        case Types.SELECT_POSTS_RECENT:{
            return {...state,post_recent:[...action.posts]};
        }

        case Types.SELECT_POSTS_READ :{
            return {...state,post_top:[...action.posts]};
        }

        case Types.SELECT_POSTS_TALK :{
            return {...state,post_talk:[...action.posts]};
        }

        case Types.SELECT_POSTS_DEV :{
            return {...state,post_dev:[...action.posts]};
        }

        case Types.SELECT_POSTS_TECH :{
            return {...state,post_tech:[...action.posts]};
        }

        case Types.SELECT_POSTS_RANDOM :{
            return {...state,post_random:[...action.posts]};
        }

        case Types.SELECT_POSTS_ONE :{
            return {...state,post_one:{...action.posts}};
        }

        case Types.SELECT_POSTS_CATEGORY :{
            return {...state,post_category:[...action.posts]};
        }

        default:
            return {...state};
    }
}

export default postsReducer;