const navMenu = document.getElementById('nav-menu');
const hamburguer = document.getElementById('hamburguer');

hamburguer.addEventListener('click',() => {
    navMenu.classList.toggle('responsive-dinamic');
    /* if(hamburguer.src.split('img')[1] == '/hamburguesa.png'){
        hamburguer.src = '../../img/cruz.png';
    }
    else{
        hamburguer.src = '../../img/hamburguesa.png';
    } */
    /* switch(hamburguer.src.split('img')[1]){
        case ('/cruz.png'):
            hamburguer.src = './img/cruz.png';
            break
        case ('/hamburguer.png'):
            hamburguer.src = './img/hamburguesa.png';
            break
    } */

    /* if (navMenu.classList.contains('responsive-dinamic')) {
        hamburguer.src = './img/cruz.png';
    } else {
        hamburguer.src = './img/hamburguesa.png';...
    } */

    hamburguer.src = navMenu.classList.contains('responsive-dinamic')
        ? './img/hamburguesa.png'
        : './img/cruz.png';
});



document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        navMenu.classList.add('responsive-dinamic');
    }
})

/* window.addEventListener('load', ()=> {
    const container = document.getElementById('container');
    const planetsContainer = document.getElementById('planets-container');
    const spinner = document.getElementById('spinner');

    setTimeout(()=> {
        spinner.style.display = 'none';
        container.style.display = 'block';
        planetsContainer.style.display = 'block';
    },2000)
}) */