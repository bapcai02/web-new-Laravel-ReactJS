import APIPosts from '../../API/APIPosts';
import * as Types from '../constand/ActionType';

export const GetApiPosts = () => {
    return (dispatch) => {
        return  APIPosts.getNewPosts().then(res=>{
            dispatch(SelectNewPosts(res))
        });         
    }
}

export const GetApiPostsRecent = () => {
    return (dispatch) => {
        return  APIPosts.getPostsRecent().then(res=>{
            dispatch(SelectPostsRecent(res))
        });         
    }
}

export const GetApiPostsTop = () => {
    return (dispatch) => {
        return  APIPosts.getPostsRead().then(res=>{
            dispatch(SelectPostsTop(res))
        });         
    }
}

export const GetApiPostsTalkDev = () => {
    return (dispatch) => {
        return  APIPosts.getPostsTalk().then(res=>{
            dispatch(SelectPostsTalkDev(res))
        });         
    }
}

export const GetApiPostsDev = () => {
    return (dispatch) => {
        return  APIPosts.getPostsDev().then(res=>{
            dispatch(SelectPostsDev(res))
        });         
    }
}

export const GetApiPostsTech = () => {
    return (dispatch) => {
        return  APIPosts.getPostsTech().then(res=>{
            dispatch(SelectPostsTech(res))
        });         
    }
}
export const GetApiPostsRandom = () => {
    return (dispatch) => {
        return  APIPosts.getPostsRandom().then(res=>{
            dispatch(SelectPostsRandom(res))
        });         
    }
}
export const GetApiPostsOne = (id) => {

    return (dispatch) => {
        return  APIPosts.getOnePosts(id).then(res=>{
            dispatch(SelectPostsOne(res))
        });         
    }
}

export const GetApiPostsCategory = (id) => {

    return (dispatch) => {
        return  APIPosts.getPostsCategory(id).then(res=>{
            
            dispatch(SelectPostsCategory(res))
        });         
    }
}



export const SelectNewPosts = (posts)=>{
    return {
        type:Types.SELECT_NEW_POSTS,
        posts,
    }
}
export const SelectPostsRecent = (posts)=>{
    return {
        type:Types.SELECT_POSTS_RECENT,
        posts,
    }
}

export const SelectPostsTop = (posts)=>{
    return {
        type:Types.SELECT_POSTS_READ,
        posts,
    }
}

export const SelectPostsTalkDev = (posts)=>{
    return {
        type:Types.SELECT_POSTS_TALK,
        posts,
    }
}

export const SelectPostsDev = (posts)=>{
    return {
        type:Types.SELECT_POSTS_DEV,
        posts,
    }
}

export const SelectPostsTech = (posts)=>{
    return {
        type:Types.SELECT_POSTS_TECH,
        posts,
    }
}

export const SelectPostsRandom = (posts)=>{
    return {
        type:Types.SELECT_POSTS_RANDOM,
        posts,
    }
}

export const SelectPostsOne = (posts)=>{
    return {
        type:Types.SELECT_POSTS_ONE,
        posts,
    }
}

export const SelectPostsCategory = (posts)=>{
    return {
        type:Types.SELECT_POSTS_CATEGORY,
        posts,
    }
}