const { default: AxiosClient } = require("./AxiosClient.js");

const  APICategory = {
    getAllCategory:(params)=>  {
        const url = '/category';
        return AxiosClient.get(url,{params});
    },
    getAllHastag:()=>  {
        const url = '/hastag';
        return AxiosClient.get(url);
    },
    getOneCategory:(id)=>  {
        const url = `/category/${id}`;
        return AxiosClient.get(url);
    },
    InsertCategory:()=>  {
        const url = '/category/add';
        return AxiosClient.post(url);
    },
    UpdateCategory:(id)=>  {
        const url = `/category/update/${id}`;
        return AxiosClient.put(url);
    },
    DeleteCategory:(id)=>  {
        const url = `/category/delete/${id}`;
        return AxiosClient.delete(url);
    },
}

export default APICategory;