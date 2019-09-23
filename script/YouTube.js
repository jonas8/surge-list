/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://Choler.github.io/Surge/Script/YouTube.js
[MITM]
hostname = *.googlevideo.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    "access-control-allow-origin": "https://www.youtube.com"
  }
};
$done({response: data});