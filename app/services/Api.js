// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import config from '../config/DBConfig'

// our "constructor"
const create = (baseURL = config.apiUrl) => {
  const api = apisauce.create({baseURL});
  //用户登录
  const userLogin = (params) => api.get('/login',params);
  //用户注册
  const userSignup = (params) => api.post('/users',params);
  // 1.获取首页的文章
  const homeArticle = (params) => api.get('/article/list/0/json',params)

  // 2.获取banners
  const homeBanners = () => api.get('/banner/json')

  
  return {
    userLogin,
    userSignup,
    homeArticle,
    homeBanners
  };
};

export default {
  create
};
