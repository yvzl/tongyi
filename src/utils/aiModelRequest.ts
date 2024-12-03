import {apiUrl} from "@/config"
import axios from "axios";

const aiModelRequest = axios.create({baseURL: apiUrl})

aiModelRequest.interceptors.request.use(config => {
    return config;
}, err => console.log(err))
aiModelRequest.interceptors.response.use(res => {
    return res.data
}, err => console.log(err))

export default aiModelRequest;