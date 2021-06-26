// alert('eu existo'); 

/*abre e fecha menu ao dar click no hamburguer e no X*/ 
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click',function(){
        // alert('chegamos')
        nav.classList.toggle('show');
    });
}
/* fecha o menu ao dar click num link do menu */
const links = document.querySelectorAll('nav ul li a');
for(const link of links){
    link.addEventListener('click',function(){
        nav.classList.remove('show');
    })
}
/*mudar o header da pagina ao fazer scroll*/
function changeHeaderWhenScroll(){
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}
/* testimonials carousel slider swiper*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel:true,
    keyboard:true,
    breakpoints: {
        767:{
        slidesPerView:2,
        setWrapperSize:true
        }
    }
  });

/* scroll reveal: mostrar elementos ao dar scroll*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
  )
/* botão voltar para o top*/
function backToTop(){
    
    const backToTopButton = document.querySelector('.back-to-top');

    if(window.scrollY >= 560){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
}
/* Ativar menu conforme a seção visivel da pagina*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection(){

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= (sectionTop + sectionHeight)
        
        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add('active')
        }else{
            document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.remove('active')
        }
                
    }
}

/* sempre que fizer scroll*/
window.addEventListener('scroll',function(){
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
})

