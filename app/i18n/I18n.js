import I18n from 'react-native-i18n'

I18n.fallbacks = true
I18n.defaultLocale = 'zh'

let languageCode = I18n.locale.substr(0, 2)

switch (languageCode) {
  case 'zh':
     I18n.translations.zh = require('./languages/zh.json')
     break
  case 'en':
    I18n.translations.en = require('./languages/english.json')
    break
}