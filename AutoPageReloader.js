// ==UserScript==
// @name         jiya
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://icarexam.net/StudentNavigation.aspx
// @grant        none
// ==/UserScript==

(function() {
     window.setInterval(refresh, 5000); 	// CALL A FUNCTION EVERY 10000 MILLISECONDS OR 10 SECONDS.
     var i = 0 ;
    var nowTime = 1537713199175 ;
    // REFRESH OR RELOAD PAGE.
    function refresh() {
        window.location.reload();
        i = i + 1;
        console.log(parseInt( (new Date().getTime() -nowTime)/10000)+"->"+i);
    }
})();