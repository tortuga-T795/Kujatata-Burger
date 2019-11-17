import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-4b029.firebaseio.com/'
});

export default instance;