var box = document.querySelector(".box");
var container = document.querySelector(".container");
var title = document.getElementById("title");
var img = document.getElementById("img");
var sizes = document.querySelector(".btn");
var text = document.getElementById("text");
var purchase = document.querySelector(".purchase");

box.addEventListener("mousemove", (e) => {
  var yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  var xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

box.addEventListener("mouseenter", (e) => {
  box.style.transition = "none";
  purchase.style.transform = "translateZ(25px)";
  text.style.transform = "translateZ(35px)";
  title.style.transform = "translateZ(35px)";
  sizes.style.transform = "translateZ(35px)";
  img.style.transform = "translateZ(35px) rotateZ(35deg)";
});

box.addEventListener("mouseleave", (e) => {
  box.style.transition = "all 0.75s ease-out";
  box.style.transform = "rotateX(0deg) rotateY(0deg)";
  purchase.style.transform = "translateZ(0px)";
  title.style.transform = "translateZ(0px)";
  text.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  img.style.transform = "translateZ(0px) rotateZ(0deg)";
});
