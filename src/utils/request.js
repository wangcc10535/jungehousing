import axios from 'axios'
import { Notification, MessageBox, Message, Loading } from 'element-ui'
import { getToken } from '@/utils/auth'
import { tansParams } from '@/utils/utils'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
console.log(process.env.VUE_APP_BASE_API);
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL:'http://1785s28l17.iask.in:36629',
  // 超时
  timeout: 60000
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 不需要token验证标识
    if (config.headers.noLoginFlag) {
      config.headers['noLoginFlag'] = true
    }
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false

    // 让每个请求携带自定义token 请根据实际情况自行修改
    if (getToken() && !isToken) {
      config.headers['Authorization'] = `Bearer ${getToken()}`
    }
    // url拼接时间戳参数
    config.url = `${config.url}`
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
      let url = config.url + '&' + tansParams(config.params)
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200,
    msg = res?.data?.msg
    // 鉴权校验
    if (code === 401) {
      MessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          location.href = '/login'
        })
        .catch(() => {
          return Promise.reject('登录状态已过期，请重新登录。')
        })
      return Promise.reject('登录状态已过期，请重新登录。')
    } else if (code === 500) {
      Message({
        message: msg || '系统错误!',
        type: 'error'
      })
      return Promise.reject(new Error(msg || '系统错误!'))
    } else if (code !== 200) {
      Notification.error({
        title: msg || '操作失败!'
      })
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  (error) => {
    let { message } = error
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
