/*
[Script]
http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://raw.githubusercontent.com/jonas8/surge-list/master/script/WeChat.js

[MITM]
hostname = mp.weixin.qq.com
*/

const response = {
  body: "",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response});