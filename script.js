function ScrollNavbar(){
   let nav = document.querySelector("#navbar");
window.onscroll = function () {
   if (document.documentElement.scrollTop > 120) {
      nav.classList.add("scroll-on");
   }
   else {
      nav.classList.remove("scroll-on");
   }
}
}
ScrollNavbar();


const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});



function MouseHover(){
   var cursor = document.querySelector('#cursor');
var purpose = document.querySelector('.purpose');
var welcome = document.querySelector('#welcometxt');

welcome.addEventListener('mousemove', function(dets){
   // console.log(dets);
   cursor.style.left = dets.x + 'px';
   cursor.style.top = dets.y + 'px';
   cursor.style.backgroundColor = "#fbee01ae";
   cursor.style.opacity = 1 ;
   cursor.style.scale = 1 ;  
   cursor.innerHTML = "Welcome"
   // cursor.style.fontSize = "10px"
})
welcome.addEventListener('mouseleave', function(dets){
   // console.log(dets);
   // cursor.style.left = (dets.x -40) + 'px';
   // cursor.style.top = (dets.y - 250) + 'px';
   cursor.style.opacity = 0 ;
   cursor.style.scale = 0;

   
})

purpose.addEventListener('mousemove', function(dets){
   // console.log(dets);
   cursor.style.left = dets.x + 'px';
   cursor.style.top = dets.y + 'px';
   cursor.style.opacity = 1 ;
   cursor.style.scale = 1 ;  
   cursor.style.backgroundColor = "#3232325d";
   cursor.innerHTML = "Hi..!"


})
purpose.addEventListener('mouseleave', function(dets){
   // console.log(dets);
   // cursor.style.left = (dets.x -40) + 'px';
   // cursor.style.top = (dets.y - 250) + 'px';
   cursor.style.opacity = 0 ;
   cursor.style.scale = 0;

   
})
}
MouseHover()

function VideoPlayer(){
   var VideoPlay = document.querySelector("#videoplay");
   var Video = document.querySelector("#welcomeVideo");
   var txt = document.querySelector("#welcometxt")

   VideoPlay.addEventListener('mouseover', function(){
         Video.style.opacity = 1;
         txt.style.color = "#fff"
   }
   
   )
   VideoPlay.addEventListener('mouseleave', function(){
      Video.style.opacity = 0;
      txt.style.color = "#000"

}
   )
}
VideoPlayer()


   function navigatorClose() {
      var navigator = document.querySelector("#navigator");
      var navigationBTN = document.querySelector("#navigationBTN");
      var navigationBtnOpen = document.querySelector("#navigationBtnOpen")
      
      navigator.style.transform = 'translateX(-100%)';
      navigationBTN.style.display = "none";
      navigationBtnOpen.style.display = "block";
      console.log("navigator close");
   }
   
   function navigatorOpen(){
      var navigator = document.querySelector("#navigator");
      var navigationBTN = document.querySelector("#navigationBTN");
      var navigationBtnOpen = document.querySelector("#navigationBtnOpen")
      
      navigator.style.transform = 'translateX(0%)';
      navigationBtnOpen.style.display = "none";
      navigationBTN.style.display = "block";
      console.log("navigator close");
   }
   document.addEventListener('DOMContentLoaded', function () {
      var navigationBTN = document.querySelector("#navigationBTN");
      var navigationBtnOpen = document.querySelector("#navigationBtnOpen");
      
      navigationBTN.addEventListener('click', navigatorClose());
      navigationBtnOpen.addEventListener('click', navigatorOpen());
      
   });


   function YoutubeNavigatorOpen() {
      var youtubeLinks = document.querySelector("#youtubeLinks");
      var YoutubeNavigatorOpen = document.querySelector("#YoutubeNavigatorOpen");
      var YoutubeNavigatorClose = document.querySelector("#YoutubeNavigatorClose")
      
      youtubeLinks.style.transform = 'translateX(0%)';
      YoutubeNavigatorClose.style.display = "block";
      YoutubeNavigatorOpen.style.display = "none";
      console.log("navigator open");
   }
   
   function YoutubeNavigatorClose(){
      var youtubeLinks = document.querySelector("#youtubeLinks");
      var YoutubeNavigatorClose = document.querySelector("#YoutubeNavigatorClose");
      var YoutubeNavigatorOpen = document.querySelector("#YoutubeNavigatorOpen")
      
      youtubeLinks.style.transform = 'translateX(100%)';
      YoutubeNavigatorOpen.style.display = "block";
      YoutubeNavigatorClose.style.display = "none";
      console.log("navigator close");
   }
   document.addEventListener('DOMContentLoaded', function () {
      var YoutubeNavigatorClose = document.querySelector("#YoutubeNavigatorClose");
      var YoutubeNavigatorOpen = document.querySelector("#YoutubeNavigatorOpen");
      
      YoutubeNavigatorClose.addEventListener('click', YoutubeNavigatorClose());
      YoutubeNavigatorOpen.addEventListener('click', YoutubeNavigatorOpen());
      
   });









gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});







// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






let tl = gsap.timeline()

// let time = () => {
//    var a = 0
//    setInterval(function(){
//       a= a + Math.floor(Math.random()*20)
//       // a = a + 9
//       if (a < 100) {
//          document.querySelector("#loader h1").innerHTML = a + "%"
//       }
//       else {
//          a = 100
//          document.querySelector("#loader h1").innerHTML = a + "%"

//       }

//    }, 150)
// }

// tl.to("#loader h1", {
//    // scale: 1.5,
//    onStart:time(),
//    delay:0.5,
//    duration: 1,
// })

tl.to("#loader", {
   top: "-100vh",
   // delay:0.3,
   duration: 0.5,

})
tl.from(".navbar-brand,.nav-item", {
   y: -200,
   duration: 0.5,
   // delay:0.5,
   opacity: 0,
   stagger: 0.2,
})
tl.from("#welcometxt h1",{
   y:50,
   opacity:0,
   duration:0.5,
})
// tl.from(".welcomeComponent", {
//    y: 100,
//    duration: 0.4,
//    // delay:0.5,
//    stagger: 0.2,
//    opacity: 0
// })
//  tl.from(".welcomeComponentH1",{
//     y:-200,
//     duration:1s,
//     delay:2,
//     stagger:1,
//     opacity:0
//  })



tl.from(".btn", {

   // delay:2,
   scale: 0,
   opacity: 0
})
tl.from(".btn", {
   y: 5,
   repeat: -1,
   duration: 0.5,
   yoyo: true
})

gsap.to("#welcometxt h1",{
   transform:"translateX(-110%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#welcometxt",
        scroller:"#main",
      //   markers:true,
        start:"top 0",
        end:"top -10%",
        scrub:2,
        pin:true
    }
})
// gsap.to("body, nav",{
//    backgroundColor: "#000",
//    scrollTrigger:{
//       trigger:"body",
//       scroller:"#main",
//       markers:true,
//       start:"top -80%",
//       end:" top -100%",
//       scrub:2
//    }

// })

gsap.to(".scrollingtxt h1",{
   transform:"translateX(-150%)",
   scrollTrigger:{
      trigger:".scrollingtxt",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      scrub:1,

    }
})
gsap.to("#navbar",{
   height:"8vh",
   // backgroundColor: "#313031cc",
   scrollTrigger:{
      trigger:"#navbar",
      scroller:"#main",
      // markers:true,
      start:"top -40%",
      end:"top -100%",
      scrub:1,
   }
})


gsap.from("#why #gif1", {
   scale: 0,
   opacity: 0,
   duration: 0.7,
   stagger: 0.2,
   scrollTrigger: {
      trigger: "#why #gif1",
      scroller: "#main",
      // markers:true,
      start: "top 60%"

   }
})
gsap.from("#why .giftxt", {
   x: 100,
   y: 50,
   // scale:0,
   opacity: 0,
   duration: 0.5,
   // stagger:0.2,
   scrollTrigger: {
      trigger: "#why .giftxt",
      scroller: "#main",
      // markers:true,
      start: "top 60%"

   }
})
gsap.from("#innersecond", {
   x: 300,
   // scale:0,
   opacity: 0,
   duration: 1,
   // stagger:0.2,
   scrollTrigger: {
      trigger: "#innersecond",
      scroller: "#main",
      // markers:true,
      start: "top 60%"

   }
})
gsap.from("#purpose", {
   // scale:0,
   opacity: 0,
   duration: 1,
   // delay:1,
   width: 0,
   height: "50%",
   // stagger:0.2,
   scrollTrigger: {
      trigger: "#purpose",
      scroller: "#main",
      // markers:true,
      start: "top 70%"
   }
})
gsap.from("#purpose h5", {

   scale: 0,
   opacity: 0,
   duration: 2,
   delay: 2,
   // stagger:0.2,
   // scrollTrigger:{
   //    trigger:"#purpose h5",
   //    scroller:"body",
   //    // markers:true,
   //    start:"top 60%"
   // }
})
gsap.from(".AccelerateSection div", {
   // y:100,
   scale: 0,
   opacity: 0,
   duration: 0.7,
   stagger: 0.2,
   // delay:1,
   scrollTrigger: {
      trigger: ".AccelerateSection div",
      scroller: "#main",
      // markers:true,
      start: "top 80%"
   }
})

//  gsap.from(".AccelerateGif",{
//    scale:0,
//    opacity:0,
//    duration:0.7,
//    // delay:1,
//    scrollTrigger:{
//          trigger:".AccelerateGif",
//          scroller:"body",
//          markers:true,
//          start:"top 100%"
//       }
//  })

gsap.from("footer .links", {
   scale: 0,
   opacity: 0,
   duration: 0.5,
   stagger: 0.2,
   scrollTrigger: {
      trigger: "footer",
      scroller: "#main",
      start: "top 98%"
   }
})


// -----------------------------------fielda html --------------------------------
