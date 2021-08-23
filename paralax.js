window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.img-arxiki-page');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
})


const parallax = document.getElementById
("serviceid");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset
    * 0.5 + "px";
})



