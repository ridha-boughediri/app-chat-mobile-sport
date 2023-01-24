import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_USER } from './config';

export const request = ({ url, method, data, token }) => {
    var token= AsyncStorage.getItem('access_token')
    if (method == get) {
        return axios({
            headers:{token:token},
            method: method,
            url: `${URL_USER}${url}`
        });
    }
    if(method==post){

    }
}



