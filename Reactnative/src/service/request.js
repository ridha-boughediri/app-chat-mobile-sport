import axios from 'axios';
import { URL_USER } from './config';

export const request = ({ url, method, data }) => {

    return axios({
        method: method || "get",
        url: `${URL_USER}${url}`,
        data,
    });
}



