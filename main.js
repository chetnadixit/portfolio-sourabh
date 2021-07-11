/*=================================MENU SHOW Y HIDDEN====================*/
const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/*===============================MENU SHOW===============================*/
/*validate if contant exist*/
if (navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============================ACCORDIAN SKILL=============================*/
const skillsContent=document.getElementsByClassName('skills__content')
    skillsHeader=document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})
/*===========================Services model===========================*/
const modelViews=document.querySelectorAll('.services__model'),
      modelBtns=document.querySelectorAll('.services__button'),
      modelCloses=document.querySelectorAll('.services__model-close')
let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}
modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click',() =>{
        model(i)
    })
})
modelCloses.forEach((modelClose) => {
    modelClose.addEventListener('click', () =>{
        modelViews.forEach((modelView) => {
            modelView.classList.remove('active-model')
        })
    })
})
/*=================================Scroll secction active link======================*/

const section=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu  a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*==================================change background header=======================*/

/*=====================================light and dark theme======================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme' 
const iconTheme = 'uil-sun' 
// Previously selected topic (if user selected) 
const selectedTheme = localStorage.getItem('selected-theme') 
const selectedIcon = localStorage.getItem('selected-icon') 

// We obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun' 
// We validate if the user previously chose a topic 
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme) 
} 
// We  save the theme an dthe current icon that the user chose
themeButton.addEventListener('click', ()=> {
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})