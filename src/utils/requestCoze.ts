import {cozeUserId, cozeBotId, cozeToken, cozeUrl} from "@/config"
import axios from "axios";

const requestCoze = axios.create({
    method: "POST",
    baseURL: cozeUrl,
    responseType: 'stream',
    headers: {
        Authorization: `Bearer ${cozeToken}`,
        "Content-Type": "application/json",
    },
})

requestCoze.interceptors.request.use(config => {
    Object.assign(config.data, {
        bot_id: cozeBotId,
        user_id: cozeUserId,
        stream: true,
        auto_save_history: true,
    })
    return config
}, err => err)
requestCoze.interceptors.response.use(res => res.data, err => err)

export {
    requestCoze
}