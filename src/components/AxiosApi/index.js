import axios from "axios";
import store from "../../index";

export const axiosApi = axios.create({
    baseURL: 'https://5f29559ba1b6bf0016ead479.mockapi.io/tudos/',
    timeout: 5000,
});

axiosApi.interceptors.request.use(req => {
        store.dispatch({type: "LOADING_TOGGLE", page: {loading: true}})
        return req;
    }, error => error
);
axiosApi.interceptors.response.use(req => {
        store.dispatch({type: "LOADING_TOGGLE", page: {loading: false}})
        return req;
    }, error => error
);

