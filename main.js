// ==UserScript==
// @name         Change Roblox buttons back to green
// @namespace    http://tampermonkey.net/
// @version      2025-02-07
// @description  Restore American freedom!
// @author       CDRedstone
// @match        https://*.roblox.com/*
// @icon         https://images.rbxcdn.com/7bba321f4d8328683d6e59487ce514eb
// @grant        none
// @run-at       document-end
// @include      https://www.roblox.com
// ==/UserScript==

(function() {
    'use strict';
    console.log("running");
    var greencolor = "#56AC72";
    const style = document.createElement('style');
style.innerHTML = `
    .btn-common-play-game-lg, .btn-growth-sm {
        background-color: #01b270 !important;
    }
`;
document.head.appendChild(style);
})();
