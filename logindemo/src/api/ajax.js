import axios from "axios";
import {
    Toast
} from 'antd-mobile'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.interceptors.request.use(config => {
    NProgress.start()
    return config
})

axios.interceptors.response.use(
    response => {
        NProgress.done()
        return response.data
    }, ({ message: content }) => {
        NProgress.done()
        Toast.show({ content })
        return new Promise(() => { })
    }
)

export default axios