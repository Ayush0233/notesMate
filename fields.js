let nav = document.querySelector("#navbar");
 window.onscroll = function () {
    if(document.documentElement.scrollTop > 120){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
 }

 const scroll = new LocomotiveScroll({
    el: document.querySelector('#field'),
    smooth: true
 });
 
 
 
 
 
 gsap.registerPlugin(ScrollTrigger);
 
 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#field"),
   smooth: true
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the "#field" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#field", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#field").style.transform ? "transform" : "fixed"
 });
 
 
 
 
 
 
 
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();
 let tl = gsap.timeline()

 gsap.to("#fieldLoader", {
    top: "200vh",
    duration:2,
    opacity:1
 
 })
 gsap.from(".fieldcard ", {
    y: 100,
    // scale:0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    // scrollTrigger:{
    //    trigger:".fieldcards",
    //    scroller:"body",
    // }
 })
 gsap.from("footer .links", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
       trigger: "footer",
       scroller: "#field",
       start: "top 98%",
    }
 })

 
//  tl.from(".navbar-brand,.nav-item",{
//      y:-200,
//      duration:1,
//      // delay:0.5,
//      opacity:0,
//      stagger:0.2,
//  })

// console.log("hello woel")