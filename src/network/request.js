import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    //http://v.juhe.cn/toutiao/index?type=top&key=6a922723ec3bc28a7e107b588ce3b6d1
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  //请求拦截的作用
  instance.interceptors.request.use(config =>{
    return config
  },err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res =>{
    return res.data
  },err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)
}