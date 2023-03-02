"use script"

let navMenu =document.getElementsByClassName(".navMenu");
let closeBtn=document.getElementById("#closeBtn");
let openBtn=document.getElementById("#openBtn");


openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);

function open() {
  navMenu.style.display="block";
  navMenu.style.top=0;
}

function close(){
  navMenu.style.top= "-100px";
}








// //  openBtn.addEventListener("click", openMenuBtn);
// //  closeBtn.addEventListener("click",closeMenuBtn);

// //  let toogle = false;

// //  let tooglefunc = function () {
// //   if (toogle) {
// //     toogle = false;
// //   }else {
// //     toogle = true
// //   }
// //  };

// //  let toogleBtnFunc = function (){
// //   tooglefunc();

// //   toogleBtn.style.backgroundcolor = toogle? "olivedrab" : "red";
// //   infoRight.style.display = toogle ? "none" : "block";
// //   toogleBtn.textContent = toogle? "open" : "close"
// //  };

// //  toogleBtn.addEventListener("click",toogleBtnFunc)


























// const hamburger = document.getElementsByClassName(".hamburger");
// const navbar__list = document.getElementsByClassName(".navbar-list");

// hamburger.addEventListener("click", function(){
//   hamburger.classList.toggle("active");
//   navbar__list.classList.toggle("active")
// })