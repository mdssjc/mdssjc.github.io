/*
 * MDS - JavaScript
 *
 * Conjunto de funções para a página.
 *
 * autor: Marcelo dos Santos
 */

// Google Analytics
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-55078607-1', 'auto');
ga('send', 'pageview');

// Github Ribbon
function githubRibbon() {
    var link = document.createElement("a");
    link.setAttribute("href", "https://github.com/mdssjc");

    var image = document.createElement("img");
    image.setAttribute("style", "position: absolute; top: 0; right: 0; border: 0;");
    image.setAttribute("src", "images/github-ribbon.png");
    image.setAttribute("alt", "Fork me on GitHub");

    link.appendChild(image);
    document.body.appendChild(link);
}

// Botão de Controle
function criarControle() {
    var elementTop = document.createElement("img");
    elementTop.setAttribute("style", "display: block; position: fixed; bottom: 10px; right: 10px;");
    elementTop.setAttribute("src", "images/goto-top.png");
    elementTop.setAttribute("alt", "Topo da página");
    elementTop.setAttribute("title", "Topo da página");
    elementTop.setAttribute("onclick", "gotoTop()");

    document.body.appendChild(elementTop);
}

function gotoTop() {
    window.scrollTo(0, 0);
}

function detectMobile() {
    return window.innerWidth <= 600 || window.innerHeight <= 200;
}

// Event Trigger
window.onload = function() {
    var path = location.pathname;

    if (!detectMobile()) {
        githubRibbon();
    }
    if (path.indexOf("index.html") == -1) {
        criarControle();
    }
    // loadCSS( "stylesheets/css.css" );
    // loadCSS( "http://www.w3schools.com/lib/w3.css" );
}
