//mudanca de cor do Nav
window.addEventListener ("scroll", function(){
    let Nav = document.querySelector('#menu');

    Nav.classList.toggle('second-bg',window.scrollY > 100);
}); 

//ativar itens do menu
document.addEventListener('DOMContentLoaded', function() {
    const menuItens = document.querySelectorAll('.menu-item');

    menuItens.forEach( item => {
        item.addEventListener('click', function() {
            menuItens.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    menuItens[0].classList.add('active');
});

//efeito lanterna do cursor
/*
document.addEventListener('DOMContentLoaded', function() {
    const lanterna = document.createElement('div');
    lanterna.classList.add('lanterna');
    document.body.appendChild(lanterna);

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        lanterna.style.left = `${mouseX}px`;
        lanterna.style.top = `${mouseY}px`;
    });
});
*/

//download do curriculo


 


