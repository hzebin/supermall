import axios from 'axios'

export function request(config) {
  //创建一个实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/hy',
    timeout: 10000
  })

  //request请求时拦截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  //response响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  })

  //返回结果
  return instance(config);
}
