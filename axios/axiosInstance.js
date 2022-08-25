const axios = require('axios');

const AxiosInstance = axios.create({
    baseURL: 'https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities'
});

module.exports = AxiosInstance;