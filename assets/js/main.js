const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

// document.ready(function(e){
//   $("body").find("#nfc").hover(function() {
//       $("#basicModal").modal('show');
//   }, function(){
//       $("#basicModal").modal('hide');                            
//   });
// });

$$('.marketplace-cart').forEach(element => {
    element.addEventListener('mouseover', (event) => {
        console.log($("#exampleModal"))
    });

});