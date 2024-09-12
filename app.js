const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



var fixed = document.getElementById("box-container");
var menus = document.getElementById("menus");

fixed.addEventListener("mouseover",function(){
    fixed.style.display="block";   
})
fixed.addEventListener("mouseleave",function(){
    fixed.style.display="none";   
})

menus.addEventListener("mouseover",function(){
    fixed.style.display="block";
})

menus.addEventListener("mouseleave",function(){
    fixed.style.display="none";
})



var elems = document.querySelectorAll(".rect")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })

    // function swiperAnimation() {
    //     var swiper = new Swiper(".mySwiper", {
    //         slidesPerView: "auto",
    //         centeredSlides: true,
    //         spaceBetween: 100,
    //     });
    // }
    // swiperAnimation();