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
// @include      https://*.roblox.com
// ==/UserScript==

(function() {
    'use strict';
    console.log("running");
    var greencolor = "#56AC72";
    const style = document.createElement('style');
style.innerHTML = `
    .btn-common-play-game-lg, .btn-growth-sm, .btn-growth-md, .btn-toggle.on, .web-blox-css-tss-lo77dr-Button-contained, .web-blox-css-mui-1ujcvrb.Mui-checked + .MuiSwitch-track, .web-blox-css-tss-13ltd1g-Badge-colorPrimary, .web-blox-css-mui-23skhk, .web-blox-css-mui-1ghtbzf, .web-blox-css-tss-1ufr6a1-Tabs-indicator-tabsIndicator, .web-blox-css-tss-od6vvj-Alert-standardInfo, .cart-number-container, .btn-growth-xs {
        background-color: #01b270 !important;
    }
    .web-blox-css-mui-1ujcvrb.Mui-checked, .web-blox-css-tss-13r9j67-Link-colorPrimary-Link-root-preferenceLink, .web-blox-css-mui-k81yot, .web-blox-css-tss-q4r4zc-Link-colorPrimary-Link-root-experienceTitle, .web-blox-css-tss-hl1oq9-Link-colorPrimary-Link-root, .web-blox-css-tss-12qcr6e-Button-text, .web-blox-css-mui-4kistw, .web-blox-css-tss-d0yocm-Typography-overline-Typography-root-tableHeader, .web-blox-css-tss-1h34wph-Link-colorPrimary-Link-root-link {
        color: #01b270 !important;
    }
    .web-blox-css-tss-1hh082h-Switch-colorPrimary.Mui-checked .MuiSwitch-thumb {
        background: #01b270 !important;
    }
    #upgrade-now-button {
        background-color: #fff !important;
    }
    .icon-radio-check-circle-filled {
        border: 6px solid #01b270 !important;
    }
`;
document.head.appendChild(style);
})();
