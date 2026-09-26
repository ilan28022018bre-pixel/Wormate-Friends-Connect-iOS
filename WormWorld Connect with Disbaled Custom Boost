// ==UserScript==
// @name         WormWorld Connect
// @version      0.6
// @description  The best and first in the world
// @author       Luiz ACC
// @match        https://wormate.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // 1. Redirect root landing page to /wormworld
  if (location.host === "wormate.io" && location.pathname === "/") {
    window.stop();
    location.href = "https://wormate.io/wormworld";
    return;
  }

  // 2. Base HTML structure containing game layout, analytics, and UI components
  const htmlBase = `<!DOCTYPE HTML><html class="no-js" lang="en"><head><script async="async" src="https://www.googletagmanager.com/gtag/js?id=G-QRX6QDRELL"></script><script type="text/javascript">/*<![CDATA[*/window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-QRX6QDRELL');/*]]>*/</script><script type="text/javascript">/*<![CDATA[*/window.addEventListener("load",function(){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','564585964028735');fbq('track','PageView');});/*]]>*/</script><noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=564585964028735&amp;ev=PageView&amp;noscript=1" /></noscript><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, initial-scale=1, maximum-scale=1, minimal-ui, user-scalable=no" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="mobile-web-app-capable" content="yes" /><meta name="apple-itunes-app" content="app-id=1135523852" /><meta property="fb:app_id" content="861926850619051" /><title>Wormate.io Adventures Non-Stop</title><meta name="description" content="Drive your worm in massively multiplayer online game! Eat sweets, donuts and cakes to grow faster. Play with others all over the world." /><meta name="keywords" content="wormateio, wormate, io, worm, worms, snake, snakes, game, online, games, web, html5, fun, mmo" /><script>window.aiptag=window.aiptag||{cmd:[]};aiptag.cmd.display=aiptag.cmd.display||[];aiptag.cmd.player=aiptag.cmd.player||[];</script><script async="async" src="//api.adinplay.com/libs/aiptag/pub/WRM/wormate.io/tag.min.js"></script><link rel="apple-touch-icon" href="/images/apple-touch-icon.png" /><link rel="icon" href="/images/favicon.ico" /><link href="/css/style.css?v=1b4be73" rel="stylesheet" /><meta property="og:title" content="Wormate.io Adventures Non-Stop" /><meta property="og:description" content="Drive your worm in massively multiplayer online game! Eat sweets, donuts and cakes to grow faster. Play with others all over the world." /><meta property="og:type" content="website" /><meta property="og:site_name" content="wormate.io" /><meta property="og:url" content="https://wormate.io/" /><meta property="og:image" content="https://wormate.io/images/og-share-img-3.png" /><meta property="og:image:width" content="600" /><meta property="og:image:height" content="350" /><link rel="image_src" href="https://wormate.io/images/og-share-img-3.png" /><link rel="canonical" href="https://wormate.io/" /><link rel="alternate" hreflang="en" href="https://wormate.io/" /><link rel="alternate" hreflang="uk" href="https://wormate.io/uk/" /><link rel="alternate" hreflang="de" href="https://wormate.io/de/" /><link rel="alternate" hreflang="fr" href="https://wormate.io/fr/" /><link rel="alternate" hreflang="es" href="https://wormate.io/es/" /><th:img src="G-QRX6QDRELL"></th:img></head><body><div id="game-wrap">...</div>`;

  // 3. Dynamic script tag loader appended via URL hash
  const response = htmlBase + location.hash + '"></script></body></html>';

  // 4. Overwrite original document before default page load completes
  document.open();
  document.write(response);
  document.close();
})();
