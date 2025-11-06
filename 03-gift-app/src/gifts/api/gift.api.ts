import axios from 'axios';

export const giftApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
    params:{
        lang: 'es',
        api_key: import.meta.env.VITE_GIFT_API_KEY
    }
})