/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://raw.githubusercontent.com/jonas8/surge-list/master/script/YouTube.js
[MITM]
hostname = *.googlevideo.com
*/
$done({
  body: "{}",
  headers: {
    "Content-Type": "application/byteranges",
    "Access-Control-Allow-Credentials": "true",
    "access-control-allow-origin": "https://www.youtube.com"
  }
});
