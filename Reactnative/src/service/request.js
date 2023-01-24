import axios from 'axios';
import { URL_USER } from './config';

export const request = ({ url, method, data }) => {
    if (method == get) {
        return axios({
            method: method,
            url: `${URL_USER}${url}`
        });
    }
    if(method==post){

    }
}



