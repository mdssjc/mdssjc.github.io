/*
 * MDS - JavaScript
 *
 * Conjunto de funções para a página.
 *
 * autor: Marcelo dos Santos
 */

// Botão de Controle
function criarControle() {
    var elementTop = document.createElement("img");
    elementTop.setAttribute("style", "display: block; position: fixed; bottom: 10px; right: 10px;");
    elementTop.setAttribute("id", "goto-top");
    elementTop.setAttribute("src", "img/goto-top.png");
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

function detectScrollBar() {
    document.getElementById("goto-top").style.visibility = window.pageYOffset > 0 ? "visible" : "hidden";
}

// Event Trigger
window.onscroll = function() {
    detectScrollBar();
}

window.onload = function() {
    if (!detectMobile()) {
        githubRibbon();
    }
    criarControle();
    detectScrollBar();
}
