//___________CARROSSEL DE IMAGENS_____________
const imgs = document.getElementById("img");
const img= document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;
    if (idx > img.length - 1){
        idx= 0;
    }
    imgs.style.transform=`translateX(${- idx* 50}vh)`;
}
setInterval(carrossel, 2000);













//__________________MENU HAMBURGUER_______________

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

