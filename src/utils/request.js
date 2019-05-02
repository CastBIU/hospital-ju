import qs from 'qs'
import axios from 'axios'
// import router from '../router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  // timeout: 5000 // request timeout
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // config.headers['Token'] = GetToken()
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => {
    if (response.data.code === 401) {
    } else {
      return response
    }
  },
  error => {
    // console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

/**
 * Post 用json提交数据
 * @param {String} url 请求的url
 * @param {Object} data 请求的数据
 * @param {Object} config Axios的其他配置
 */
export function Post (url, data, config = {}) {
  return service({
    url,
    method: 'post',
    data: data || {},
    config: {
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    }
  })
}

/**
 * Post 用表单提交数据
 * @param {String} url 请求的url
 * @param {Object} data 请求的数据，会自动序列化
 * @param {Object} config Axios的其他配置
 */
export function PostAsForm (url, data, config = {}) {
  return service({
    url,
    method: 'post',
    data: qs.stringify(data || {}),
    config: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      ...config
    }
  })
}

export function Put (url, data, config = {}) {
  return service({
    url,
    method: 'put',
    data: data,
    config: {
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    }
  })
}

export function Get (url, params = {}, config = {}) {
  return service({
    url,
    method: 'get',
    params,
    config: {
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    }
  })
}

export default service
