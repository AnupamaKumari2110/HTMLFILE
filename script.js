
gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav",{
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger:{
  }
})

gsap.to( "#main", {
  backgroundColor:"#000",
  scrollTrigger:{
    trigger: "#main",
    scroller: "body",
    markers: false,
    start: "top -30%",
    end: "top -80%",
    scrub:2

  }
})

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = (dets.x - 250) + "px";
  blur.style.top = (dets.y - 200) + "px";
});


let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2000);


