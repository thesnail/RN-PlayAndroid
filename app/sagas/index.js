import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'
import DebugConfig from '../config/DebugConfig'

/* ------------- Types ------------- */
import { StartupTypes } from '../redux/StartupRedux'
import { NavigationTypes } from '../redux/NavigationRedux'
import { AppTypes } from '../redux/AppRedux'
import { UserTypes } from '../redux/UserRedux'
import { HomeTypes, success } from '../redux/HomeRedux'
import { SearchTypes } from '../redux/SearchRedux'

/* ------------- Sagas ------------- */
import { startup } from './StartupSagas'
import { redirectFlow, resetFlow, rootFlow, sideFlow } from './NavigationSagas'
import { appintro } from './AppSagas'
import { sigin,signup} from './UserSagas'
import { getHomeArticle} from './HomeSagas'
import { search} from './SearchSagas'


const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
    yield all([
        // 启动
        takeLatest(StartupTypes.STARTUP, startup),
        // 跳转处理
        takeLatest(NavigationTypes.REDIRECT, redirectFlow),
        takeLatest(NavigationTypes.RESET, resetFlow),
        takeLatest(NavigationTypes.ROOT, rootFlow),
        // 引导页
        takeLatest(AppTypes.APPINTRO, appintro),

        //用户登录
        takeLatest(UserTypes.SIGNIN_REQUEST, sigin, api),
        //用户注册
        takeLatest(UserTypes.SIGNUP_REQUEST, signup, api),

        //获取首页的文章信息
        takeLatest(HomeTypes.READ_HOME_ARTICLES, getHomeArticle, api),

        takeLatest(SearchTypes.SEARCH, search, api),
    ])
}