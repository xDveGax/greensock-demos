import { TweenMax, TweenLite, TimelineMax } from "gsap"

const eggo = document.querySelector(".box")
const photo = document.querySelector(".photo")
const rotate = document.querySelector('.rotate');
const resume = document.querySelector('.resume');
const fromTo = document.querySelector('.fromTo');

TweenMax.to(eggo, 1, {
  scale: 1.25,
  repeat: -1,
  yoyo: true,
  ease: Back.easeOut.config(1.7),
});

TweenMax.set(rotate, {
  backgroundColor: "purple",
  width: "100px",
  height: "100px",
});

rotate.addEventListener('mouseenter', () => {
  TweenMax.to(rotate, .5, {
    rotation: "+=45",
  })
});

TweenMax.set(resume, {
  backgroundColor: "#00C5FF",
  width: "50px",
  height: "50px",
});


const timeline = new TimelineMax({ repeat: -1 });
timeline.pause();
timeline.to(resume, .5, { x: 50 });
timeline.to(resume, .5, { y: 50 });
timeline.to(resume, .5, { x: 0 });
timeline.to(resume, .5, { y: 0 });

resume.addEventListener('click', () => {
  if (timeline.isActive()) {
    timeline.pause();
  } else {
    timeline.resume();
  }
});

document.addEventListener("wheel", event => {
  if (event.wheelDelta > 0) {
    TweenMax.to(timeline, 0.25, { progress: "+=0.1" })
  } else {
    TweenMax.to(timeline, 0.25, { progress: "-=0.1" })
  }
})
/*
TweenLite.to(photo, 2,{
  width:"200px",
  height:"150px"
});
TweenLite.to(photo, 2, {
  backgroundColor:"#ff0000",
  width:"50%",
  top:"100px",
  ease:Power2.easeInOut
});
*/

TweenLite.to(photo, 4, {
  boxShadow:"0px 0px 20px red",
  color:"#FC0",
  delay: 2,
  ease: Elastic.easeInOut
});
/*
TweenMax.set(fromTo, {
  backgroundColor: "green",
  width: "50px",
  height: "50px",
  x: "50px",
  y: "50px",
  xPercent: "-50",
  yPercent: "-50"
})

document.addEventListener("click", event => {
  const { x, y } = event
  TweenMax.fromTo(
    fromTo,
    1,
    { x, y },
    { x: 10, y: 10 }
  )
})
*/

const divs = Array.from({ length: 100 }, () =>
  document.createElement("div")
)

divs.forEach(div => {
  TweenMax.set(div, {
    position: "absolute",
    x: `${Math.random() * window.innerWidth}px`,
    y: `${Math.random() * window.innerHeight}px`,
    width: 20,
    height: 20,
    backgroundColor: "green",
    border: "3px solid black"
  })

  document.body.appendChild(div)
})

document.addEventListener("click", event => {
  const { x, y } = event

  TweenMax.to(divs, 1, { x, y })
})
