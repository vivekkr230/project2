const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem=document.querySelector("#elem-container");
var fixed=document.querySelector("#fixed-image");
elem.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elem.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

var elem1=document.querySelector("#elem1")
elem1.addEventListener('mouseenter',function(){
    var img=elem1.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img})`
})
var elem2=document.querySelector("#elem2")
elem2.addEventListener('mouseenter',function(){
    var img2=elem1.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img2})`
})
var elem3=document.querySelector("#elem3")
elem3.addEventListener('mouseenter',function(){
    var img3=elem3.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img3})`
})
var elem4=document.querySelector("#elem4")
elem4.addEventListener('mouseenter',function(){
    var img4=elem4.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img4})`
})
var elem5=document.querySelector("#elem5")
elem5.addEventListener('mouseenter',function(){
    var img5=elem5.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img5})`
})
var elem6=document.querySelector("#elem6")
elem6.addEventListener('mouseenter',function(){
    var img6=elem6.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img6})`
})
var elem7=document.querySelector("#elem7")
elem7.addEventListener('mouseenter',function(){
    var img7=elem7.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${img7})`
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

