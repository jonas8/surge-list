/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://raw.githubusercontent.com/jonas8/surge-list/master/script/YouTube.js
[MITM]
hostname = *.googlevideo.com
*/

let headers = $response.headers;

$done({headers, body: {}});
