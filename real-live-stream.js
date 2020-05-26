// ==UserScript==
// @name         直链播放器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match			*://*.douyu.com/0*
// @match			*://*.douyu.com/1*
// @match			*://*.douyu.com/2*
// @match			*://*.douyu.com/3*
// @match			*://*.douyu.com/4*
// @match			*://*.douyu.com/5*
// @match			*://*.douyu.com/6*
// @match			*://*.douyu.com/7*
// @match			*://*.douyu.com/8*
// @match			*://*.douyu.com/9*
// @match			*://*.douyu.com/topic/*
// @match        *://*.huya.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

/*
  md5.js
*/
var hexcase = 0; var b64pad = ""; var chrsz = 8; function hex_md5(s) { return binl2hex(core_md5(str2binl(s), s.length * chrsz)) } function b64_md5(s) { return binl2b64(core_md5(str2binl(s), s.length * chrsz)) } function str_md5(s) { return binl2str(core_md5(str2binl(s), s.length * chrsz)) } function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)) } function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)) } function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)) } function md5_vm_test() { return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72" } function core_md5(x, len) { x[len >> 5] |= 0x80 << ((len) % 32); x[(((len + 64) >>> 9) << 4) + 14] = len; var a = 1732584193; var b = -271733879; var c = -1732584194; var d = 271733878; for (var i = 0; i < x.length; i += 16) { var olda = a; var oldb = b; var oldc = c; var oldd = d; a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936); d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586); c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819); b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330); a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897); d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426); c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341); b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983); a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416); d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417); c = md5_ff(c, d, a, b, x[i + 10], 17, -42063); b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162); a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682); d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101); c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290); b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329); a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510); d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632); c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713); b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302); a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691); d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083); c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335); b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848); a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438); d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690); c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961); b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501); a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467); d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784); c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473); b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734); a = md5_hh(a, b, c, d, x[i + 5], 4, -378558); d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463); c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562); b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556); a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060); d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353); c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632); b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640); a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174); d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222); c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979); b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189); a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487); d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835); c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520); b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651); a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844); d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415); c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905); b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055); a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571); d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606); c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523); b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799); a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359); d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744); c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380); b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649); a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070); d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379); c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259); b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551); a = safe_add(a, olda); b = safe_add(b, oldb); c = safe_add(c, oldc); d = safe_add(d, oldd) } return Array(a, b, c, d) } function md5_cmn(q, a, b, x, s, t) { return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b) } function md5_ff(a, b, c, d, x, s, t) { return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t) } function md5_gg(a, b, c, d, x, s, t) { return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t) } function md5_hh(a, b, c, d, x, s, t) { return md5_cmn(b ^ c ^ d, a, b, x, s, t) } function md5_ii(a, b, c, d, x, s, t) { return md5_cmn(c ^ (b | (~d)), a, b, x, s, t) } function core_hmac_md5(key, data) { var bkey = str2binl(key); if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz); var ipad = Array(16), opad = Array(16); for (var i = 0; i < 16; i++) { ipad[i] = bkey[i] ^ 0x36363636; opad[i] = bkey[i] ^ 0x5C5C5C5C } var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz); return core_md5(opad.concat(hash), 512 + 128) } function safe_add(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF); var msw = (x >> 16) + (y >> 16) + (lsw >> 16); return (msw << 16) | (lsw & 0xFFFF) } function bit_rol(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)) } function str2binl(str) { var bin = Array(); var mask = (1 << chrsz) - 1; for (var i = 0; i < str.length * chrsz; i += chrsz)bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32); return bin } function binl2str(bin) { var str = ""; var mask = (1 << chrsz) - 1; for (var i = 0; i < bin.length * 32; i += chrsz)str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask); return str } function binl2hex(binarray) { var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef"; var str = ""; for (var i = 0; i < binarray.length * 4; i++) { str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF) } return str } function binl2b64(binarray) { var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; var str = ""; for (var i = 0; i < binarray.length * 4; i += 3) { var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF); for (var j = 0; j < 4; j++) { if (i * 8 + j * 6 > binarray.length * 32) str += b64pad; else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F) } } return str }

(function () {
    'use strict';
    if (isAlive()) {
        let roomId = getRoomId()
        if (roomId === 0) {
            alert('获取房间号失败');
            return;
        }
        let potBtn = document.createElement("button");
        // a.type = "button";
        potBtn.innerText = "播放器"
        potBtn.style = "position: fixed;top: 10px;right: 15px;z-index: 9999;width: 60px;height: 30px;border: 2px solid;"
        potBtn.addEventListener("click", () => {
            getRealLive_Douyu(roomId, false, "777", "1", (rurl) => {
                location.href = "vlc://" + rurl.replace("https", "http");
            })
        })
        document.body.appendChild(potBtn);
    }
})();

function isAlive() {
    return true;
}

function getRoomId() {
    // let reg = '[=/]([0-9]*)$'
    let reg = '(?:com/|rid=)([0-9]+)$'
    let matches = location.href.match(reg);
    return matches ? matches[1] : 0;
}

function getRealLive_Douyu(room_id, is_https, qn, cdn, reallive_callback) {
    // 第一个参数传入string,表示房间号（注意是真实房间号）
    // 第二个参数传入bool,表示是否返回https地址。注意https地址只能使用一次，使用过以后需要再次获取；http地址无限制
    // 第三个参数传入string(1,2,3,4),表示清晰度 流畅_550p(rate:1) 高清_1200p(rate:2) 超清_2000p(rate:3) 蓝光4M_4000p(rate:4) 填写777则返回默认清晰度
    // 第四个参数传入string(1,2,3,4),表示线路 1:主线路(ws-h5) 2:备用线路1(tct-h5) 3:备用线路2(ali-h5) 此参数只对HTTPS有效
    // 第五个参数传入回调函数，最好是箭头函数，用于处理返回的地址，例: (url) => {console.log(url)}
    GM_xmlhttpRequest({
        method: "GET",
        url: 'https://m.douyu.com/' + room_id,
        responseType: "text",
        onload: function (response) {
            let a = response.response.match(/(function ub9.*)[\s\S](var.*)/i);
            let ridMatch = response.response.match('https://m.douyu.com/([0-9]+)');
            let b = String(a[1]).replace(/eval.*;}/, 'strc;}');
            let c = b + String(a[2]);
            let tt2 = dateFormat("yyyyMMdd", new Date());
            let tt0 = String(Math.round(new Date().getTime() / 1000).toString());
            RealLive_get_sign_url(tt2, ridMatch[1], tt0, c, is_https, qn, cdn, reallive_callback); // 传入参数无误
        }
    });
}

function RealLive_get_sign_url(post_v, r, tt, ub9, is_https, qn, cdn, reallive_callback) {
    let sign = RealLive_get_sign(r, post_v, tt, ub9);
    if (!is_https) {
        let postData = 'v=2501' + post_v + '&did=10000000000000000000000000001501&tt=' + tt + '&sign=' + sign + '&ver=219032101&rid=' + r + '&rate=-1';
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://m.douyu.com/api/room/ratestream",
            data: postData,
            responseType: "json",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36'
            },
            onload: function (response) {
                let ret = response.response;
                let result = "";
                if (ret.code == "0") {
                    let url = ret.data.url;
                    if (String(url).indexOf("mix=1") != -1) {
                        result = "PKing"
                    } else {
                        let p = /live\/(\d{1,8}[0-9a-zA-Z]+)_?[\d]{0,4}\/playlist/i;
                        result = String(url).match(p)[1];
                    }
                } else {
                    result = "0";
                }
                let cl = "";
                switch (qn) {
                    case "1":
                        cl = "550p"
                        break;
                    case "2":
                        cl = "1200p"
                        break;
                    case "3":
                        cl = "2000p"
                        break;
                    case "4":
                        cl = "4000p"
                        break;
                    default:
                        cl = "1200p"
                        break;
                }
                let realLive = "";
                if (result == "0") {
                    realLive = "None";
                } else {
                    if (qn == "777") {
                        // qn写777则不返回清晰度，即默认
                        realLive = "https://tx2play1.douyucdn.cn/live/" + result + ".flv?uuid=";
                    } else {
                        realLive = "https://tx2play1.douyucdn.cn/live/" + result + "_" + cl + ".flv?uuid=";
                    }
                }

                reallive_callback(realLive);
            }
        });
    }
}

function dateFormat(fmt, date) {
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function RealLive_get_sign(r, post_v, tt, ub9) {
    let ub9_ex = String(ub9).replace("ub98484234", "ub98484234_ex");
    eval1(ub9_ex, "exScript1");
    let res2 = ub98484234_ex();
    let str3 = String(res2).replace(/\(function[\s\S]*toString\(\)/, "\'");
    let md5rb = hex_md5(r + '10000000000000000000000000001501' + tt + '2501' + post_v);
    let str4 = 'function get_sign(){var rb=\'' + md5rb + str3;
    let str5 = String(str4).replace(/return rt;}[\s\S]*/, 'return re;};');
    let str6 = String(str5).replace(/"v=.*&sign="\+/, '');
    str6 = String(str6).replace("get_sign", "get_sign_ex")
    eval1(str6, "exScript2");
    let sign = get_sign_ex(r + "10000000000000000000000000001501", tt);
    document.getElementById("exScript1").remove();
    document.getElementById("exScript2").remove();
    return sign;
}

function eval1(str, iid) {
    let sc = document.createElement("script");
    sc.id = iid
    sc.setAttribute("type", "text\/javascript");
    sc.appendChild(document.createTextNode(str));
    document.body.appendChild(sc);
}


