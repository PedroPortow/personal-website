'use strict';

function slideUpOnLoad(){
    const slideUpOnLoad = document.querySelectorAll('.slideUpOnLoad');

    const revealSection = function(entries, observer) {
        const[entry] = entries;
       
    
        if(!entry.isIntersecting) return;
        setTimeout(function()
        {entry.target.classList.remove('sec-hidden')}, 2000);
    }
    
    const sectionObserver = new IntersectionObserver (revealSection, {
        root: null,
        threshold: 0.15,
    });
    
    slideUpOnLoad.forEach(function(section){
        sectionObserver.observe(section);
        section.classList.add('sec-hidden')
    });
};

slideUpOnLoad();

function slideUp(){
    const slideUp = document.querySelectorAll('.slideUp');

    const revealSection = function(entries, observer) {
        const[entry] = entries;
       
    
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('sec-hidden');
    }
    
    const sectionObserver = new IntersectionObserver (revealSection, {
        root: null,
        threshold: 0.10,
    });
    
    slideUp.forEach(function(section){
        sectionObserver.observe(section);
        section.classList.add('sec-hidden')
    });
};

slideUp();
/////////////////////////////////////////////
const secondPage = document.querySelector('.secondPage')
const slideTo = document.querySelector('.slideTo')

slideTo.addEventListener('click', function(){
    secondPage.scrollIntoView({behavior: 'smooth'})
})

///////////////////////////

function addAnim(){
    const addAnim = document.querySelectorAll('.anim2');

    const revealSection = function(entries, observer) {
        const[entry] = entries;
       
    
        if(!entry.isIntersecting) return;
        entry.target.classList.add('home-title2');
    }
    
    const sectionObserver = new IntersectionObserver (revealSection, {
        root: null,
        threshold: 0.10,
    });
    
    addAnim.forEach(function(section){
        sectionObserver.observe(section);
        section.classList.remove('home-title2')
    });
};

addAnim();

//////////////////////////////////////////////////
