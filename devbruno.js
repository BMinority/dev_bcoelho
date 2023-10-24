// Este script adiciona uma classe 'scroll' ao nav quando a página é rolada

window.addEventListener('scroll', function() {
    const nav = document.getElementById('menu');
    if (window.scrollY > 0) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});

// Este script adiciona a classe 'ativo' ao item do menu clicado e remove dos outros

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        menuItems.forEach(function(item) {
            item.classList.remove('ativo');
        });
        this.classList.add('ativo');
    });
});
