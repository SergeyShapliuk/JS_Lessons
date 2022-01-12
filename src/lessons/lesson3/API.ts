import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '995f97b1';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `/?apikey=${key}&s=${title}`;
        return axiosInstance.get(query);
    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `/?apikey=${key}&t=${title}&type=${type}`;
        return axiosInstance.get(query);
    }
};


export default API;
