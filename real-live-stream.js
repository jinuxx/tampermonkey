// ==UserScript==
// @name         直链播放器
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.douyu.com/*
// @match        *://*.huya.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    'use strict';
    if (isAlive()) {
        init_btn();
        init_url()
    }

})();

function init_btn() {
    let potBtn = document.createElement("button");
    // a.type = "button";
    potBtn.innerText = "播放器"
    potBtn.style = "position: fixed;top: 10px;right: 15px;z-index: 9999;width: 60px;height: 30px;border: 2px solid;"
    potBtn.addEventListener("click", function () {
        let realUrl = getStreamUrl().split("&amp;").join("&");
        console.log(realUrl);
        location.href = "vlc://" + realUrl;
    })
    document.body.appendChild(potBtn);
}

function isAlive() {
    return true;
}

function init_url() {
    let url = 'https://m.douyu.com/' + roomId;
    GM_xmlhttpRequest({
        method: 'GET',
        url: url,
        responseType: 'text',
        onload: function (response) {
            console.log(response)
        }
    })
}

function getRoomId(){
    
}

function getURLString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}