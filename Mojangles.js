// ==UserScript==
// @name         Wormate.io - Mojangles Font
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Applies the Mojangles (Minecraft) font to Wormate.io UI and Canvas
// @author       You
// @match        https://wormate.io/*
// @run-at       document-start
// @grant        none
// ==UserScript==

(function () {
    'use strict';

    // 1. Inject @font-face style for standard DOM elements
    const styleNode = document.createElement('style');
    styleNode.textContent = `
        @font-face {
            font-family: 'Mojangles';
            src: url('https://raw.githubusercontent.com/South-Team/mojangles-font/main/Mojangles.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        /* Apply to UI, leaderboards, menus, and text elements */
        body, *, .hud, .score, .leaderboard, .nickname, button, input {
            font-family: 'Mojangles', monospace, sans-serif !important;
        }
    `;
    (document.head || document.documentElement).appendChild(styleNode);

    // 2. Intercept 2D Canvas context rendering for in-game names and stats
    const originalFillText = CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText = function (text, x, y, maxWidth) {
        if (this.font) {
            // Replace canvas font families with Mojangles
            this.font = this.font.replace(/['"]?[^,]+['"]?/g, "'Mojangles'");
        }
        return originalFillText.apply(this, arguments);
    };

    const originalStrokeText = CanvasRenderingContext2D.prototype.strokeText;
    CanvasRenderingContext2D.prototype.strokeText = function (text, x, y, maxWidth) {
        if (this.font) {
            this.font = this.font.replace(/['"]?[^,]+['"]?/g, "'Mojangles'");
        }
        return originalStrokeText.apply(this, arguments);
    };
})();
