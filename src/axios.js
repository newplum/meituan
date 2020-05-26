import axios from 'axios';

// axios.interceptors.request.use( config => {
//     // console.log(config);
//     config.baseURL = 'https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/';
//     return config;
// }, error => {
//     return Promise.reject(error);
// })

axios.interceptors.response.use( res => {
    res = res.data;
    return res;
}, error => {
    return Promise.reject(error);
})

export default axios;