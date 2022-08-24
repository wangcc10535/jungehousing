import axios from 'axios';
import { Notification, MessageBox, Message } from 'element-ui';
import store from '@/store';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// 创建axios实例
const http = axios.create({
  baseURL: '接口的前半部分加端口',
  timeout: 5000 //响应时间
  // headers:{"Content-Type":"application/json;charset=utf-8"},
});
//拦截器  -请求拦截
http.interceptors.request.use(
  (config) => {
    //部分接口需要token
    let token = localStorage.getItem('token');
    if (token) {
      config.headers.token = token;
      // config.headers ={
      // 'token':token
      // }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
//拦截器  -响应拦截
http.interceptors.response.use(res=>{
  if(res.data.code===2000){
    return Promise.resolve(res.data)
    //这里读者们可以根据服务器返回的数据去自行修改
  }else{
    return Promise.reject(res.data)
  }
},err=>{
  return Promise.reject(err)
});

//整体导出
export default http;