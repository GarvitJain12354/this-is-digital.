function animation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
   
    
    
   
   
   
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
animation()

















var l1 =  document.querySelector("#l1")
var l2 =  document.querySelector("#l2")
var l3 =  document.querySelector("#l3")
var flag = 0;
document.querySelector("#icon").addEventListener("click",function(){

    if(flag===0){
   l1.style.transform = `translateY(23px) rotate(-45deg)`
   l2.style.opacity = "0"
   l3.style.width = "90%"
   l3.style.transform = `rotate(47deg)`
   document.querySelector("#menu").style.top = "55%"
   flag = 1
    }
    else{
        flag=0
   l1.style.transform = `translateY(0px) rotate(0deg)`
   l2.style.opacity = "1"
   l3.style.width = "20%"
   document.querySelector("#menu").style.top = "150%"
   

   l3.style.transform = `rotate(0deg)`

    }
})

function swipe(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 3,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       
      });
}
swipe()




gsap.from("#page1>h1",{
    opacity:0,
    duration:1,
    // delay:-.5,
    ease:Expo.easeInOut
})
gsap.from("#page1>h4",{
    opacity:0,
    x:-50,
    ease:Expo.easeInOut

})
gsap.from("#o1",{
    y:100,
    opacity:0,
    duration:1,
   delay:.5,
    ease:Expo.easeInOut
},)
gsap.from("#o2",{
    x:100,

    opacity:0,
    duration:1,
    
    ease:Expo.easeInOut
},"-=1")
gsap.from("#o3",{
    y:-100,

    opacity:0,
    duration:1,
   
    ease:Expo.easeInOut
},"-=1")
gsap.from("#bpage>h3,#bpage>h1,#bpage>h4",{

  scrollTrigger:{
    scroller:"#main",
 trigger:"#bpage>h3",

  },
  y:20,
  opacity:0,
  duration:1.2,
ease:Expo.easeInOut,
skewY:2
})

gsap.from("#page2>#left3>#left-img>img,#left3>#right-img>img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
   
    
   
    
  },
 
 
 
  y:30,
  opacity:0,
  ease:Expo.easeInOut,
  duration:1
})

gsap.from("#right3>h1,#right3>p,#right3>#dets",{

  scrollTrigger:{
    scroller:"#main",
    trigger:"#right3",
    start:"top 10%",
  
  },
  opacity:0,
  y:50,
  duration:1,
  stagger:0.5,
  ease:Expo.easeInOut,
  transform:`skewY(2deg)`
})
gsap.from("#page3>h1,#page3>#comp>img,#page3>h4",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
  
    start:"top 20%"
  },
  opacity:0,
  y:50,
  skewY:2,
  duration:1,
  stagger:.2
})

gsap.from("#p1,#p2,#p3,#p4,#p5",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6",
    start:"top 30%"
  },
  opacity:0,
  y:100,
  duration:1,
  stagger:.3,
  skewY:5
})