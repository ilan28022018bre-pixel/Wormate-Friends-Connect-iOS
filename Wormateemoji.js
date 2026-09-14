// ==UserScript==
// @name         Wormate Friends Connect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Safe example
// @match        https://wormate.io/*
// @connect      wormate.io
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const getIDIOMA = 'https://wormate.io/';

    GM_xmlhttpRequest({
        method: 'GET',
        url: getIDIOMA,

        onload: function (response) {
            console.log('Response received:', response.responseText);
        },

        onerror: function (error) {
            console.error('Request failed:', error);
        }
    });

})();
