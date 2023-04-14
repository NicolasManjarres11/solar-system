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
    switch(hamburguer.src.split('img')[1]){
        case ('/hamburguesa.png'):
            hamburguer.src = '../../img/cruz.png';
            break
        case ('/cruz.png'):
            hamburguer.src = '../../img/hamburguesa.png';
            break
    }
})

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.add('responsive-dinamic');
    }
})