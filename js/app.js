/*кнопка наверх*/
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

/*попап*/
const login = document.querySelector('.login')
const modal = document.querySelector('.modal')
const modalWrap = document.querySelector('.modal__wrap')
const closeModal = document.querySelector('.close')
const modalBody = document.querySelector('.modal__body')

login.addEventListener('click', function(e){
    e.preventDefault();
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
/*меню бургер*/
let hamb = document.querySelector('.hamb')
let hambPopup = document.querySelector('.hamb-popup')
let body = document.body

hamb.addEventListener('click', function(){
    hambPopup.classList.toggle('open');
    hamb.classList.toggle('clicked')
    body.classList.toggle('noscroll')
})

/*анимация*/
wow = new WOW(
    {
    boxClass: 'wow',      
    animateClass: 'animated', 
    offset: 0,          
    mobile: false,       
    live: true        
    }
)
    wow.init();

/*Плавная прокрутка*/
const anchors = document.querySelectorAll('a.scroll-to')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.nav').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
      })
    }
   
const hambLinks = document.querySelectorAll('.hamb-link')
for(let hambLink of hambLinks){
    hambLink.addEventListener('click', function(){
        hambPopup.classList.toggle('open');
        hamb.classList.toggle('clicked');
    })    
}

