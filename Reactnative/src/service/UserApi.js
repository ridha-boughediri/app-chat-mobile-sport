import { URL_USER } from "../service/UserApi";
import axios from "axios";


async function createUser(user){


    return new Promise((resolve, reject) => {
        setTimeout(function(){
            axios.post(URL_USER, {
                lastname: user.lastname,
                firstname:user.firstname,
                email: user.email,
                login: user.login,
                password: user.password,
            })
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                resolve (error.response)
            })
        }, 5000)
        
    })
}

async function findOneUser(id){
    const res = await axios.get(`${URL_USER}/${id}`);
    return res.data;
}





export default {
   
    createUser,
    findOneUser,
  
}