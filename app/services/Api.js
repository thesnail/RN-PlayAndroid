// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import config from '../config/DBConfig'

// our "constructor"
const create = (
  baseURL = config.apiUrl,
  bmobURL = config.apiBmob,
  applicationId = config.applicationId,
  restAPIKey = config.restAPIKey,
  masterKey = config.masterKey,
  secretKey = config.secretKey
) => {
  const api = apisauce.create({baseURL});
  const bmob = apisauce.create({
    baseURL:bmobURL,
    headers: {
      'X-Bmob-Application-Id':applicationId,
      'X-Bmob-REST-API-Key':restAPIKey,
      'Content-Type': 'application/json'
    }
  })
  //用户登录
  const userLogin = (params) => bmob.get('/login',params);
  //用户注册
  const userSignup = (params) => bmob.post('/users',params);

  // 1.获取首页的文章
  const homeArticle = (params) => api.get('/article/list/0/json',params);

  // 2.获取banners
  const homeBanners = () => api.get('/banner/json');

  // 3. 获取
  const homeSystems = () => api.get('/tree/json');
  
  // 4. 热搜
  const hotSearch = (params) => api.post('/article/query/0/json',{k:'Android'},{});

  return {
    userLogin,
    userSignup,
    homeArticle,
    homeBanners,
    homeSystems,
    hotSearch
  };
};

export default {
  create
};
