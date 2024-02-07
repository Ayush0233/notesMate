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
    el: document.querySelector('#about'),
    smooth: true
 });
 
 
 
 
 
 gsap.registerPlugin(ScrollTrigger);
 
 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#about"),
   smooth: true
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the "#about" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#about", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#about").style.transform ? "transform" : "fixed"
 });
 
 
 
 
 
 
 
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();
var tl = gsap.timeline();


 
 tl.to("#Aboutloader", {
    left: "-200vw",
    duration:3,
    opacity:1
 
 })