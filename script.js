function ScrollNavbar() {
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

function MouseHover() {
   var cursor = document.querySelector('#cursor');
   var purpose = document.querySelector('.purpose');
   var welcome = document.querySelector('#welcometxt');

   welcome.addEventListener('mousemove', function (dets) {
      // console.log(dets);
      cursor.style.left = dets.x + 'px';
      cursor.style.top = dets.y + 'px';
      cursor.style.backgroundColor = "#fbee01ae";
      cursor.style.opacity = 1;
      cursor.style.scale = 1;
      cursor.innerHTML = "Welcome"
      // cursor.style.fontSize = "10px"
   })
   welcome.addEventListener('mouseleave', function (dets) {
      // console.log(dets);
      // cursor.style.left = (dets.x -40) + 'px';
      // cursor.style.top = (dets.y - 250) + 'px';
      cursor.style.opacity = 0;
      cursor.style.scale = 0;


   })

   purpose.addEventListener('mousemove', function (dets) {
      // console.log(dets);
      cursor.style.left = dets.x + 'px';
      cursor.style.top = dets.y + 'px';
      cursor.style.opacity = 1;
      cursor.style.scale = 1;
      cursor.style.backgroundColor = "#3232325d";
      cursor.innerHTML = "Hi..!"


   })
   purpose.addEventListener('mouseleave', function (dets) {
      // console.log(dets);
      // cursor.style.left = (dets.x -40) + 'px';
      // cursor.style.top = (dets.y - 250) + 'px';
      cursor.style.opacity = 0;
      cursor.style.scale = 0;


   })
}
MouseHover()

function VideoPlayer() {
   var VideoPlay = document.querySelector("#videoplay");
   var Video = document.querySelector("#welcomeVideo");
   var txt = document.querySelector("#welcometxt")

   VideoPlay.addEventListener('mouseover', function () {
      Video.style.opacity = 1;
      txt.style.color = "#fff"
   }

   )
   VideoPlay.addEventListener('mouseleave', function () {
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

function navigatorOpen() {
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

function YoutubeNavigatorClose() {
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



const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);
window.addEventListener("resize", () => {
   locoScroll.update();
});

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
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
   delay:0.3,
   duration: 0.5,


})
tl.from(".navbar-brand,.nav-item", {
   y: -200,
   duration: 0.5,
   // delay:0.5,
   opacity: 0,
   stagger: 0.2,
})
tl.from("#welcometxt h1", {
   y: 50,
   opacity: 0,
   duration: 0.5,
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

gsap.to("#welcometxt h1", {
   transform: "translateX(-110%)",
   fontWeight: "100",
   scrollTrigger: {
      trigger: "#welcometxt",
      scroller: "#main",
      //   markers:true,
      start: "top 0",
      end: "top -10%",
      scrub: 1,
      pin: true
   }
})

// function Canvas(){
//    const canvas = document.querySelector("canvas");
//    const context = canvas.getContext("2d");
   
//    canvas.width = window.innerWidth;
//    canvas.height = window.innerHeight;
   
   
//    window.addEventListener("resize", function () {
//      canvas.width = window.innerWidth;
//      canvas.height = window.innerHeight;
//      render();
//    });
   
//    function files(index) {
//      var data = `
//      https://thisismagma.com/assets/home/lore/seq/1.webp?2
//      https://thisismagma.com/assets/home/lore/seq/2.webp?2
//      https://thisismagma.com/assets/home/lore/seq/3.webp?2
//      https://thisismagma.com/assets/home/lore/seq/4.webp?2
//      https://thisismagma.com/assets/home/lore/seq/5.webp?2
//      https://thisismagma.com/assets/home/lore/seq/6.webp?2
//      https://thisismagma.com/assets/home/lore/seq/7.webp?2
//      https://thisismagma.com/assets/home/lore/seq/8.webp?2
//      https://thisismagma.com/assets/home/lore/seq/9.webp?2
//      https://thisismagma.com/assets/home/lore/seq/10.webp?2
//      https://thisismagma.com/assets/home/lore/seq/11.webp?2
//      https://thisismagma.com/assets/home/lore/seq/12.webp?2
//      https://thisismagma.com/assets/home/lore/seq/13.webp?2
//      https://thisismagma.com/assets/home/lore/seq/14.webp?2
//      https://thisismagma.com/assets/home/lore/seq/15.webp?2
//      https://thisismagma.com/assets/home/lore/seq/16.webp?2
//      https://thisismagma.com/assets/home/lore/seq/17.webp?2
//      https://thisismagma.com/assets/home/lore/seq/18.webp?2
//      https://thisismagma.com/assets/home/lore/seq/19.webp?2
//      https://thisismagma.com/assets/home/lore/seq/20.webp?2
//      https://thisismagma.com/assets/home/lore/seq/21.webp?2
//      https://thisismagma.com/assets/home/lore/seq/22.webp?2
//      https://thisismagma.com/assets/home/lore/seq/23.webp?2
//      https://thisismagma.com/assets/home/lore/seq/24.webp?2
//      https://thisismagma.com/assets/home/lore/seq/25.webp?2
//      https://thisismagma.com/assets/home/lore/seq/26.webp?2
//      https://thisismagma.com/assets/home/lore/seq/27.webp?2
//      https://thisismagma.com/assets/home/lore/seq/28.webp?2
//      https://thisismagma.com/assets/home/lore/seq/29.webp?2
//      https://thisismagma.com/assets/home/lore/seq/30.webp?2
//      https://thisismagma.com/assets/home/lore/seq/31.webp?2
//      https://thisismagma.com/assets/home/lore/seq/32.webp?2
//      https://thisismagma.com/assets/home/lore/seq/33.webp?2
//      https://thisismagma.com/assets/home/lore/seq/34.webp?2
//      https://thisismagma.com/assets/home/lore/seq/35.webp?2
//      https://thisismagma.com/assets/home/lore/seq/36.webp?2
//      https://thisismagma.com/assets/home/lore/seq/37.webp?2
//      https://thisismagma.com/assets/home/lore/seq/38.webp?2
//      https://thisismagma.com/assets/home/lore/seq/39.webp?2
//      https://thisismagma.com/assets/home/lore/seq/40.webp?2
//      https://thisismagma.com/assets/home/lore/seq/41.webp?2
//      https://thisismagma.com/assets/home/lore/seq/42.webp?2
//      https://thisismagma.com/assets/home/lore/seq/43.webp?2
//      https://thisismagma.com/assets/home/lore/seq/44.webp?2
//      https://thisismagma.com/assets/home/lore/seq/45.webp?2
//      https://thisismagma.com/assets/home/lore/seq/46.webp?2
//      https://thisismagma.com/assets/home/lore/seq/47.webp?2
//      https://thisismagma.com/assets/home/lore/seq/48.webp?2
//      https://thisismagma.com/assets/home/lore/seq/49.webp?2
//      https://thisismagma.com/assets/home/lore/seq/50.webp?2
//      https://thisismagma.com/assets/home/lore/seq/51.webp?2
//      https://thisismagma.com/assets/home/lore/seq/52.webp?2
//      https://thisismagma.com/assets/home/lore/seq/53.webp?2
//      https://thisismagma.com/assets/home/lore/seq/54.webp?2
//      https://thisismagma.com/assets/home/lore/seq/55.webp?2
//      https://thisismagma.com/assets/home/lore/seq/56.webp?2
//      https://thisismagma.com/assets/home/lore/seq/57.webp?2
//      https://thisismagma.com/assets/home/lore/seq/58.webp?2
//      https://thisismagma.com/assets/home/lore/seq/59.webp?2
//      https://thisismagma.com/assets/home/lore/seq/60.webp?2
//      https://thisismagma.com/assets/home/lore/seq/61.webp?2
//      https://thisismagma.com/assets/home/lore/seq/62.webp?2
//      https://thisismagma.com/assets/home/lore/seq/63.webp?2
//      https://thisismagma.com/assets/home/lore/seq/64.webp?2
//      https://thisismagma.com/assets/home/lore/seq/65.webp?2
//      https://thisismagma.com/assets/home/lore/seq/66.webp?2
//      https://thisismagma.com/assets/home/lore/seq/67.webp?2
//      https://thisismagma.com/assets/home/lore/seq/68.webp?2
//      https://thisismagma.com/assets/home/lore/seq/69.webp?2
//      https://thisismagma.com/assets/home/lore/seq/70.webp?2
//      https://thisismagma.com/assets/home/lore/seq/71.webp?2
//      https://thisismagma.com/assets/home/lore/seq/72.webp?2
//      https://thisismagma.com/assets/home/lore/seq/73.webp?2
//      https://thisismagma.com/assets/home/lore/seq/74.webp?2
//      https://thisismagma.com/assets/home/lore/seq/75.webp?2
//      https://thisismagma.com/assets/home/lore/seq/76.webp?2
//      https://thisismagma.com/assets/home/lore/seq/77.webp?2
//      https://thisismagma.com/assets/home/lore/seq/78.webp?2
//      https://thisismagma.com/assets/home/lore/seq/79.webp?2
//      https://thisismagma.com/assets/home/lore/seq/80.webp?2
//      https://thisismagma.com/assets/home/lore/seq/81.webp?2
//      https://thisismagma.com/assets/home/lore/seq/82.webp?2
//      https://thisismagma.com/assets/home/lore/seq/83.webp?2
//      https://thisismagma.com/assets/home/lore/seq/84.webp?2
//      https://thisismagma.com/assets/home/lore/seq/85.webp?2
//      https://thisismagma.com/assets/home/lore/seq/86.webp?2
//      https://thisismagma.com/assets/home/lore/seq/87.webp?2
//      https://thisismagma.com/assets/home/lore/seq/88.webp?2
//      https://thisismagma.com/assets/home/lore/seq/89.webp?2
//      https://thisismagma.com/assets/home/lore/seq/90.webp?2
//      https://thisismagma.com/assets/home/lore/seq/91.webp?2
//      https://thisismagma.com/assets/home/lore/seq/92.webp?2
//      https://thisismagma.com/assets/home/lore/seq/93.webp?2
//      https://thisismagma.com/assets/home/lore/seq/94.webp?2
//      https://thisismagma.com/assets/home/lore/seq/95.webp?2
//      https://thisismagma.com/assets/home/lore/seq/96.webp?2
//      https://thisismagma.com/assets/home/lore/seq/97.webp?2
//      https://thisismagma.com/assets/home/lore/seq/98.webp?2
//      https://thisismagma.com/assets/home/lore/seq/99.webp?2
//      https://thisismagma.com/assets/home/lore/seq/100.webp?2
//      https://thisismagma.com/assets/home/lore/seq/101.webp?2
//      https://thisismagma.com/assets/home/lore/seq/102.webp?2
//      https://thisismagma.com/assets/home/lore/seq/103.webp?2
//      https://thisismagma.com/assets/home/lore/seq/104.webp?2
//      https://thisismagma.com/assets/home/lore/seq/105.webp?2
//      https://thisismagma.com/assets/home/lore/seq/106.webp?2
//      https://thisismagma.com/assets/home/lore/seq/107.webp?2
//      https://thisismagma.com/assets/home/lore/seq/108.webp?2
//      https://thisismagma.com/assets/home/lore/seq/109.webp?2
//      https://thisismagma.com/assets/home/lore/seq/110.webp?2
//      https://thisismagma.com/assets/home/lore/seq/111.webp?2
//      https://thisismagma.com/assets/home/lore/seq/112.webp?2
//      https://thisismagma.com/assets/home/lore/seq/113.webp?2
//      https://thisismagma.com/assets/home/lore/seq/114.webp?2
//      https://thisismagma.com/assets/home/lore/seq/115.webp?2
//      https://thisismagma.com/assets/home/lore/seq/116.webp?2
//      https://thisismagma.com/assets/home/lore/seq/117.webp?2
//      https://thisismagma.com/assets/home/lore/seq/118.webp?2
//      https://thisismagma.com/assets/home/lore/seq/119.webp?2
//      https://thisismagma.com/assets/home/lore/seq/120.webp?2
//      https://thisismagma.com/assets/home/lore/seq/121.webp?2
//      https://thisismagma.com/assets/home/lore/seq/122.webp?2
//      https://thisismagma.com/assets/home/lore/seq/123.webp?2
//      https://thisismagma.com/assets/home/lore/seq/124.webp?2
//      https://thisismagma.com/assets/home/lore/seq/125.webp?2
//      https://thisismagma.com/assets/home/lore/seq/126.webp?2
//      https://thisismagma.com/assets/home/lore/seq/127.webp?2
//      https://thisismagma.com/assets/home/lore/seq/128.webp?2
//      https://thisismagma.com/assets/home/lore/seq/129.webp?2
//      https://thisismagma.com/assets/home/lore/seq/130.webp?2
//      https://thisismagma.com/assets/home/lore/seq/131.webp?2
//      https://thisismagma.com/assets/home/lore/seq/132.webp?2
//      https://thisismagma.com/assets/home/lore/seq/133.webp?2
//      https://thisismagma.com/assets/home/lore/seq/134.webp?2
//      https://thisismagma.com/assets/home/lore/seq/135.webp?2
//      https://thisismagma.com/assets/home/lore/seq/136.webp?2
//     `;
//      return data.split("\n")[index];
//    }
   
//    const frameCount = 136;
   
//    const images = [];
//    const imageSeq = {
//      frame: 1,
//    };
   
//    for (let i = 0; i < frameCount; i++) {
//      const img = new Image();
//      img.src = files(i);
//      images.push(img);
//    }
   
//    gsap.to(imageSeq, {
//      frame: frameCount - 1,
//      snap: "frame",
//      ease: `none`,
//      scrollTrigger: {
//        scrub: 0.15,
//        trigger: `canvas`,
//        //   set start end according to preference
//        start: `top top`,
//        end: `600% top`,
//        scroller: `#main`,
//      },
//      onUpdate: render,
//    });
   
//    images[1].onload = render;
   
//    function render() {
//      scaleImage(images[imageSeq.frame], context);
//    }
   
//    function scaleImage(img, ctx) {
//      var canvas = ctx.canvas;
//      var hRatio = canvas.width / img.width;
//      var vRatio = canvas.height / img.height;
//      var ratio = Math.max(hRatio, vRatio);
//      var centerShift_x = (canvas.width - img.width * ratio) / 2;
//      var centerShift_y = (canvas.height - img.height * ratio) / 2;
//      ctx.clearRect(0, 0, canvas.width, canvas.height);
//      ctx.drawImage(
//        img,
//        0,
//        0,
//        img.width,
//        img.height,
//        centerShift_x,
//        centerShift_y,
//        img.width * ratio,
//        img.height * ratio
//      );
//    }
//    ScrollTrigger.create({
   
//      trigger: "#canvasDiv",
//      pin: true,
//      // markers:true,
//      scroller: `#main`,
//    //   set start end according to preference
//      start: `top top`,
//      end: `600% top`,
//    });
   
// }

 
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

gsap.to(".scrollingtxt h1", {
   transform: "translateX(-150%)",
   scrollTrigger: {
      trigger: ".scrollingtxt",
      scroller: "#main",
      // markers:true,
      start: "top 80%",
      scrub: 1,

   }
})
gsap.to("#navbar", {
   height: "8vh",
   // backgroundColor: "#313031cc",
   scrollTrigger: {
      trigger: "#navbar",
      scroller: "#main",
      // markers:true,
      start: "top -40%",
      end: "top -100%",
      scrub: 1,
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


// -----------------------------------bca html --------------------------------
function PdfOpen(){
   var StructureOS = document.querySelector("#StructureOS")
   var ShowSpace = document.querySelector(".viewerSection iframe")
   StructureOS.addEventListener("click", function(){
      ShowSpace.src = "./elements/plsql.pdf#toolbar=0"
      console.log("DONE")
   })
}
PdfOpen()