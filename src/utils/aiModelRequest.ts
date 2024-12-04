import {apiUrl} from "@/config"
import axios from "axios";

export const aiModelRequest = axios.create({baseURL: apiUrl})

aiModelRequest.interceptors.request.use(config => config, err => console.log(err))
aiModelRequest.interceptors.response.use(res => res.data, err => console.log(err))