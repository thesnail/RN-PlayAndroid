export default {
    apiUrl: "http://www.wanandroid.com",
    apiBmob:'https://api.bmob.cn/1/',
    applicationId:'7a87a6923f07db8020e8e6a3372769c6',
    restAPIKey:'c87fdd2035a09b8529af41c1ff53f895',
    secretKey:'6b775d82b846ffb5',
    masterKey:'ab2066db6e2a1300f9b6100b590264ef'
}

/**
 * 
 * 
 * 
 * Application ID，SDK初始化必须用到此密钥
REST API Key，REST API请求中HTTP头部信息必须附带密钥之一
Secret Key，是SDK安全密钥，不可泄漏，在云函数测试云函数时需要用到
Master Key，超级权限Key。应用开发或调试的时候可以使用该密钥进行各种权限的操作，此密钥不可泄漏
 */
  