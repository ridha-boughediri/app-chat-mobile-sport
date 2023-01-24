import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL_USER } from './config';

export const request = async (url, method, data) => {
    var token = await AsyncStorage.getItem('access_token')
    if (token) {
        if (method === 'get') {
            return axios({
                headers: { 'authorization': token },
                method: method,
                
                url: `${URL_USER}${url}`
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
        }
    } else {
        throw new Error("Token not found")
    }
}




