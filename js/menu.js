const menuabrir = document.querySelector('.menuabrir');
const menu = document.querySelector('.menu-navegacion');


menuabrir.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener("click", e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != menuabrir ){
        menu.classList.toggle("spread")
    }
})