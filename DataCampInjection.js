// ==UserScript==
// @name         Hide Popup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://campus.datacamp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Bootup Script");
    var visibleButtonCalled = false;
    executeHide();
    function executeHide(){
       try{
         console.log("Searching");
         document.getElementsByClassName('modal-container')[0].style.visibility = "hidden";
         visibleButton();
       }catch(e){
           console.log("Failed to Find");
           if(!visibleButtonCalled){
               setTimeout(function(){
                   executeHide();
               }, 5000);
           }
        }
    }
    function visibleButton(){
        visibleButtonCalled = true;
        var submitAnswer = document.querySelectorAll("[data-test-id=execute-code-button]")[0]
        var runCode = document.querySelectorAll("[data-cy=run-code-button]")[0]

        submitAnswer.disabled = false;
        removeClass(submitAnswer,'is-disabled')

        runCode.disabled = false;
        removeClass(runCode,'is-disabled')
    }



    function removeClass(el, className)
    {
        if (el.classList){
            el.classList.remove(className)
        }
        else if (hasClass(el, className))
        {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    }
    /* Element Observer on Dynamic Page Load */
    var observerElement = document.head

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    const config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
    };
    const observer = new MutationObserver(function(mutations) {
        visibleButtonCalled = false;
        executeHide();
    });
    observer.observe(observerElement, config);
})();