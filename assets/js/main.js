const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$('.intro').onmousemove  = (e) => {
    $('.intro-img img').style.transform = `translate(${e.x/80}px,${e.y/60}px)`
}

window.onscroll = function (e) {  
    let distanceFromTop = $('.value').getBoundingClientRect().top;
    let heightElement = $('.value').clientHeight;

    let thisArea = distanceFromTop+heightElement

    if(distanceFromTop<(window.screen.height/2) && thisArea >0){
        const thisShitPercent = 100-(distanceFromTop/(window.screen.height/2))*100;

        if(window.screen.width<739){
            $('.value-item-icon--1').style.transform = `rotate(7deg) translate(-220%,${80+thisShitPercent*0.15}%)`
            $('.value-item-icon--2').style.transform = `translateY(${thisShitPercent*0.4}%)`
            $('.value-item-icon--3').style.transform = `rotate(-7deg) translate(220%,${80+thisShitPercent*0.15}%)`
        }
        else{
            $('.value-item-icon--1').style.transform = `rotate(60deg) translate(-240%,${190+thisShitPercent*0.8}%)`
            $('.value-item-icon--2').style.transform = `translateY(${thisShitPercent*0.6}%)`
            $('.value-item-icon--3').style.transform = `rotate(-60deg) translate(240%,${190+thisShitPercent*0.8}%)`
        }
    }
} 