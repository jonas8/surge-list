/*
[Script]
http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://raw.githubusercontent.com/jonas8/surge-list/master/script/WeChat.js

[MITM]
hostname = mp.weixin.qq.com
*/

var data = {
  body: "",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});