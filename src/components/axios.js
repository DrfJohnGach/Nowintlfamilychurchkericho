import axios from "axios";

const baseUrl = 'https://apiserver.nowfamilychurchkericho.com/';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;