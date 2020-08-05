import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'https://5f29559ba1b6bf0016ead479.mockapi.io/tudos/',
    timeout: 5000,
});


