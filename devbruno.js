window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

//---------------------------------------------------------


window.alert("Olá! no momento eu estou sem acesso a um telefone; por tanto, sem acesso ao whatsapp. Se desejar entrar em contato comigo, poderá faze-lo no chat do facebook: Bruno Coelho, Instagram: @dev_bcoelho ou linkedin: dev-bcoelho.");



// Este script adiciona uma classe 'scroll' ao nav quando a página é rolada

window.addEventListener('scroll', function () {
    const nav = document.getElementById('menu');
    if (window.scrollY > 0) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});


// Este script adiciona a classe 'ativo' ao item do menu clicado e remove dos outros
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        menuItems.forEach(function (item) {
            item.classList.remove('ativo');
        });
        this.classList.add('ativo');
    });
});
