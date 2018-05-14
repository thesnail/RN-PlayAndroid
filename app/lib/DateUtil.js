

export default class DateUtil{
  static parserDateString(dateString){
    if(dateString){
      let regEx = new RegExp("\\-","gi");
      let validDateStr=dateString.replace(regEx,"/");
      let milliseconds=Date.parse(validDateStr);
      return new Date(milliseconds);
    }
  }
    
  static formatDate(timestamp, formater) { 
    let date = new Date();
    date.setTime(parseInt(timestamp));
    formater = (formater != null)? formater : 'yyyy-MM-dd hh:mm';
    Date.prototype.Format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
      };
 
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
          (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
      return fmt;
    }
    return date.Format(formater);
  }
}