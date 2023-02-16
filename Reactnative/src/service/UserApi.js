import { URL_USER } from "../service/UserApi";
import axios from "axios";




async function findOneUser(id){
    const res = await axios.get(`http://10.10.21.26:8888/users/register`);
    return res.data;
}





export default {
    findOneUser,
}