/*
 * MDS - JavaScript
 *
 * Conjunto de funções para a página.
 *
 * autor: Marcelo dos Santos
 */

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55078607-1', 'auto');
ga('send', 'pageview');

// Github Ribbon
function githubRibbon() {
    var link = document.createElement("a");
    link.setAttribute("href", "https://github.com/mdssjc");

    var image = document.createElement("img");
    image.setAttribute("style", "position: absolute; top: 0; right: 0; border: 0;");
    image.setAttribute("src", "https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67");
    image.setAttribute("alt", "Fork me on GitHub");
    image.setAttribute("data-canonical-src", "https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png");

    link.appendChild(image);
    document.body.appendChild(link);
}

// Optimize CSS Delivery
var loadDeferredStyles = function() {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement);
    addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) {
    raf(function() { window.setTimeout(loadDeferredStyles, 0); });
} else {
    window.addEventListener('load', loadDeferredStyles);
}

// Botões de Controle
function criarControle() {
    var elementDiv = document.createElement("div");
    elementDiv.setAttribute("style", "display: block; position: fixed; bottom: 2px; right: 2px;");
    var elementTop = document.createElement("i");
    elementTop.setAttribute("class", "fa fa-arrow-circle-up fa-2x");
    elementTop.setAttribute("style", "margin-right: 5px;");
    elementTop.setAttribute("aria-hidden", "true");
    elementTop.setAttribute("onclick", "gotoTop()");
    var elementBack = document.createElement("i");
    elementBack.setAttribute("class", "fa fa-arrow-circle-left fa-2x");
    elementBack.setAttribute("style", "margin-right: 5px;");
    elementBack.setAttribute("aria-hidden", "true");
    elementBack.setAttribute("onclick", "gotoBack()");

    elementDiv.appendChild(elementBack);
    elementDiv.appendChild(elementTop);
    document.body.appendChild(elementDiv);
}

function gotoTop() { window.scrollTo(0, 0); }
function gotoBack() { window.history.back(); }

// Event Trigger
window.onload = function() {
    var path = location.pathname;

    githubRibbon();
    if (path.indexOf("index.html") == -1) {
        criarControle();
    }
}
