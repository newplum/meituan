import axios from '@/axios.js'

var api = {
    getHotPlace() {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/hotPlace');
    },
    getHotSearch () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/hotSearch');
    },
    getMenuList () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/menuList');
    },
    getIStyle () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/iStyle');
    },
    getFavorable() {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/favorable');
    },
    getStyleList () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/styleList')
    },
    getFavorableList() {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/favorableList');
    },
    getProductList () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/detailList')
    },
    getGuessList () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/guess');
    },
    getCityList () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/cityList');
    },
    getHotCityList () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/hotCity');
    },
    getPlaceInfo () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/placeInfo');
    },
    getCurPosition () {
        return axios.get('https://easy-mock.com/mock/5d638c28946e4f11af527eec/mt-data/curPosition')
    },
    login (params) {
        return axios.get('http://api.duyiedu.com/api/meituan/login', params)
    },
    register (params) {
        return axios.get('http://api.duyiedu.com/api/meituan/register', params)
    }
    
}

export default api;