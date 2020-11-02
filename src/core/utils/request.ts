import axios, { Method } from 'axios'

type RequestParams = {
    method?: Method;
    url: string;
    data?: Object;
    params?: Object;
}

const BASE_URL = 'https://api.github.com'

 export const MakeRequest = ({ method = 'GET', url, data, params }: RequestParams ) => {
    return axios({
        method, 
        url: `${BASE_URL}${url}`,
        data,
        params
    });
}