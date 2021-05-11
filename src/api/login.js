import axios from '../utils/request'

/**
 * 获取验证码的请求
 * @param {*} sid 唯一标识
 */
const getCode = (sid) => {
  return axios.get('/publicCaptcha', {
    params: {
      sid: sid
    }
  })
  // return axios.request({
  //   url: '/publicCaptcha',
  //   method: 'get'
  // })
}

/**
 * 邮件找回密码
 * @param {*} option 用户信息（邮箱、验证码）
 * @returns
 */
const forget = (option) => {
  const result = axios.post('/forget', {
    ...option
  })
  return result
}

/**
 * 登陆
 * @param {*} liginInfo
 */
const login = (liginInfo) => {
  return axios.post('/login/login', {
    ...liginInfo
  })
}

export { getCode, forget, login }

/*
// api 的 发送邮件方法路由
const forget = async (option) => {
  let result = ''
  try {
    result = await axios.post('/forget', {
      ...option
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export { getCode, forget }

// import axios from 'axios'

const getCode = async () => {
  let result = ''
  try {
    result = await axios.get('/publicCaptcha')
    if (result.status === 200) {
      console.log(result.data)
      return result.data
    }
  } catch (error) {
    // console.log(error)
    return error
  }
} */
