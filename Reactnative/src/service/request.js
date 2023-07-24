import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { URL_USER } from './config';

export const request = async (url, method, data) => {
    var token = await SecureStore.getItemAsync('access_token');
    if (token) {
        if (method === 'get') {
            return axios({
                headers: { 'authorization': token },
                method: method,
                url: `${URL_USER}${url}`
            }).then(response => {
                return response.data
            });
        } else if (method === 'post') {
            return axios({
                headers: { 'authorization': token },
                method: method,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                url: `${URL_USER}${url}`,
                data
            });
        } else if (method === 'patch') {
            return axios ({
                headers: { 'authorization': token},
                method: method,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                url: `${URL_USER}${url}`,
                data
            });
        }
    } else {
        throw new Error("Token not found")
    }
}




