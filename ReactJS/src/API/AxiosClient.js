import axios from 'axios'
import queryString from 'query-string'

const AxiosClient = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    headers : {
        'content-type' : 'aplication/json'
    },
    paramsSerializer: params=> queryString.stringify(params),
});

AxiosClient.interceptors.request.use(async(config)=>{
    return config;
})

AxiosClient.interceptors.response.use((response)=>{
    if(response && response.data){
        return response.data;
    }
    return response;
},(error)=>{
    throw error;
});

export default AxiosClient
