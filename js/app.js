
let scroll = document.querySelector('.up-btn')
let hamb = document.querySelector('.hamb');
let hambPopup = document.querySelector('.hamb-popup');
let body = document.body
const login = document.querySelector('.login-btn')
const modal = document.querySelector('.modal')
const modalWrap = document.querySelector('.modal__wrap')
const closeModal = document.querySelector('.close')
const modalBody = document.querySelector('.modal__body')
const hambLinks = document.querySelectorAll('.hamb-link')
const anchors = document.querySelectorAll('a.scroll-to')

/*кнопка наверх*/
window.addEventListener('scroll', function(){
    scroll.classList.toggle('active', window.scrollY>500)
})
scroll.addEventListener('click', function(){
   window.scrollTo({
        top: 0,
        behavior: "smooth"
})  
})


/*меню бургео*/
hamb.addEventListener('click', function(){
    hambPopup.classList.toggle('open');
    hamb.classList.toggle('clicked');
    body.classList.toggle('noscroll');
})
for(let hambLink of hambLinks){
    hambLink.addEventListener('click', function(){
        hambPopup.classList.toggle('open');
        hamb.classList.toggle('clicked');
        body.classList.toggle('noscroll');
    })    
}


/*попап*/
login.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.toggle('active');
    modalBody.classList.toggle('active');
    body.classList.toggle('no-scroll');
})
closeModal.addEventListener('click', function(){
    modal.classList.toggle('active');
    modalBody.classList.toggle('active');
    body.classList.toggle('no-scroll');
})

window.addEventListener('click', function(e){
    if (e.target == modalWrap) {
        modal.classList.toggle('active');
        modalBody.classList.toggle('active');
        body.classList.toggle('no-scroll');
    } 
})

/*подключение анимаций*/
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


/*плавная прокрутка*/
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


