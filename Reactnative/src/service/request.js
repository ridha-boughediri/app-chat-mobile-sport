import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_USER } from './config';

export const request = ({ url, method, data}) => {
    var token= AsyncStorage.getItem('access_token')
    if (method == 'get') {
        console.log('merde')
        return axios({
            headers:{token:token},
            method: method,
            url: `${URL_USER}${url}`
        });
    }
    else if(method=='post'){
        console.log('coucou')
        return axios({
            headers:{token:token},
            method: method,
            url: `${URL_USER}${url}`,
            data
        });

    }
    else{
        console.log('salut')
    }
}



