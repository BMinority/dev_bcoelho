//modificar elementos do body de acordo com o horário
function verificarHoras() {
    let agora = new Date();
    let hora = agora.getHours();
    const corpo = document.getElementById("corpo");

    if (hora < 12) {
        corpo.style.backgroundImage = "linear-gradient(to bottom, var(--azul-profundo), var(--preto)20%, var(--azul-escuro))";

        const menuItens = document.querySelectorAll('.menu-item');

        menuItens.forEach(item => {
            item.addEventListener('click', function () {
                menuItens.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        menuItens[0].classList.add('active');

        window.addEventListener("scroll", function () {
            let Nav = document.querySelector('#menu');

            Nav.classList.toggle('bg-dia', window.scrollY > 100);
        });

    } else if (hora >= 12 && hora < 19) {
        corpo.style.backgroundImage = "linear-gradient(to bottom, var(--laranja), var(--preto)20%, var(--laranja))";

        const menuItens = document.querySelectorAll('.menu-item');

        menuItens.forEach(item => {
            item.addEventListener('click', function () {
                menuItens.forEach(item => {
                    item.classList.remove('active-tarde');
                });
                this.classList.add('active-tarde');
            });
        });

        menuItens[0].classList.add('active-tarde');

        window.addEventListener("scroll", function () {
            let Nav = document.querySelector('#menu');

            Nav.classList.toggle('bg-tarde', window.scrollY > 100);
        });

    } else if (hora >= 19) {
        corpo.style.backgroundImage = "linear-gradient(to bottom, var(--cinza), var(--preto)20%, var(--cinza))";

        const menuItens = document.querySelectorAll('.menu-item');

        menuItens.forEach(item => {
            item.addEventListener('click', function () {
                menuItens.forEach(item => {
                    item.classList.remove('active-noite');
                });
                this.classList.add('active-noite');
            });
        });

        menuItens[0].classList.add('active-noite');

        window.addEventListener("scroll", function () {
            let Nav = document.querySelector('#menu');

            Nav.classList.toggle('bg-noite', window.scrollY > 100);
        });

    }
}

verificarHoras();

setInterval(verificarHoras, 1);


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