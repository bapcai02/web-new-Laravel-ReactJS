const { default: AxiosClient } = require("./AxiosClient.js");

const  APIPosts = {
    getNewPosts:(params)=>  {
        const url = '/post/newpost';
        return AxiosClient.get(url,{params});
    },
    getPostsRecent:(params)=>  {
        const url = '/post/recent';
        return AxiosClient.get(url,{params});
    },
    getPostsTalk:(params)=>  {
        const url = '/post/talk';
        return AxiosClient.get(url,{params});
    },
    getPostsDev:(params)=>  {
        const url = '/post/dev';
        return AxiosClient.get(url,{params});
    },
    getPostsTech:(params)=>  {
        const url = '/post/tech';
        return AxiosClient.get(url,{params});
    },
    getPostsRead:(params)=>  {
        const url = '/post/read';
        return AxiosClient.get(url,{params});
    },
    getPostsRandom:(params)=>  {
        const url = '/post/random';
        return AxiosClient.get(url,{params});
    },
    getOnePosts:(id)=>  {
        const url = `/post/${id}`;
        return AxiosClient.get(url);
    },
    getPostsCategory:(id)=>  {
        const url = `/post/category/${id}`;
        return AxiosClient.get(url);
    },
    InsertPosts:()=>  {
        const url = '/post/add';
        return AxiosClient.post(url);
    },
    UpdatePosts:(id)=>  {
        const url = `/post/update/${id}`;
        return AxiosClient.put(url);
    },
    DeletePosts:(id)=>  {
        const url = `/post/delete/${id}`;
        return AxiosClient.post(url);
    },
}

export default APIPosts;