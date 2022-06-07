let scroll = document.querySelector('.up-btn')
window.addEventListener('scroll', function(){
    scroll.classList.toggle('active', window.scrollY>500)
})
scroll.addEventListener('click', function(){
   window.scrollTo({
        top: 0,
        behavior: "smooth"
})  
})
new WOW().init();

const login = document.querySelector('.login')
const modal = document.querySelector('.modal')
const modalWrap = document.querySelector('.modal__wrap')
const closeModal = document.querySelector('.close')
const modalBody = document.querySelector('.modal__body')

login.addEventListener('click', function(){
    modal.classList.toggle('active')
    modalBody.classList.toggle('active')
})
closeModal.addEventListener('click', function(){
    modal.classList.toggle('active')
    modalBody.classList.toggle('active')
})

window.addEventListener('click', function(e){
    if (e.target == modalWrap) {
        modal.classList.toggle('active')
        modalBody.classList.toggle('active')
    } 
})

let nav = document.querySelector('.nav')
window.addEventListener('scroll',function(){
    nav.classList.toggle('fixed',window.scrollY>0)
})

let hamb = document.querySelector('.hamb')
let hambPopup = document.querySelector('.hamb-popup')
let hambMenu = document.querySelector('.menu__list').cloneNode(1)
let body = document.body

hamb.addEventListener('click', function(){
    hambPopup.classList.toggle('open');
    hambPopup.appendChild(hambMenu);
    hamb.classList.toggle('clicked')
    body.classList.toggle('noscroll')
})

