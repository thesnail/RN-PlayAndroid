# react-native-demo
## 一、说明
最近辞职了，刚好未来工作也想找份跨平台的App开发,由于之前一直是从事于Android和iOS原生的App开发,之前在做原生开发的时候,需要Java、Object-C、Swift不断的切换也比较麻烦，不断的转换语法，对于一般的应用在开发的速度上也相对很慢，就拿界面来说，我做iOS和Android原生界面分别需要三天共需要一个星期，然而用React Native可能两天就完成了,JSX语法基本上类似html、css,而且界面适配也没有iOS和Android考虑的多,还有在网络方面,可能Android用oKHttp，iOS用afnetworking,但是我React Native用fetch或者react native网络框架，所以对于一般的应用我写一套就可以了，找了很久也没找到合适的API,因此就用了玩Android[http://www.wanandroid.com](http://www.wanandroid.com)的API，趁着辞职没事做，做一个开源的跨平台App

## 二、技术框架
```xml
{
    "apisauce": "^0.14.3",//网络框架
    "ramda": "^0.25.0",
    "react-native-camera": "^1.1.2",//相机,因为使用了扫描QR
    "react-native-i18n": "^2.0.12",//语言国际化
    "react-native-qr-scanner": "^1.2.0",//QR
    "react-native-swiper": "^1.5.13",//教程页和Home页滚动
    "react-navigation": "^1.5.11",//导航框架
    "react-navigation-redux-helpers": "^1.0.5",
    "react-redux": "^5.0.7",//状态管理
    "reactotron-react-native": "^1.14.0",
    "reactotron-redux": "^1.13.0",
    "reactotron-redux-saga": "^1.13.0",
    "redux": "^4.0.0",
    "redux-persist": "^5.9.1",//数据持久化
    "redux-saga": "^0.16.0",
    "reduxsauce": "^0.7.0",
    "seamless-immutable": "^7.1.3"
}
```

## 三、项目截图
#### 1. 安装之后第一次打开,进入教程页
![1.gif](/screenshots/1.gif)
![1-1.gif](/screenshots/1-1.gif)


#### 2. 再次打开将进入主界面
![2.gif](/screenshots/2.gif)
![2-1.gif](/screenshots/2-1.gif)