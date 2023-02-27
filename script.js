"use script"

let navMenu =document.querySelector(".navMenu");
let closeBtn=document.querySelector("#closeBtn");
let openBtn=document.querySelector("#openBtn");


openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);

function open() {
  navMenu.style.display="block";
  navMenu.style.top=0;
}

function close(){
  navMenu.style.top= "-100px";
}

























































// mainBtn .addEventListener("click", mainBtn);
// navbarList.addEventListener("click", navbarList)
//  let openBtn =document.getElementById("main__btn");
//  let closeBtn = document.getElementById("close__btn");
//  let main = document.getElementById("categories");

//  let openMenuBtn =function (){
//  main. display ="block";
//  };

//  let closeMenuBtn = function (){
//    main. display ="block"
//  };

//  openBtn. addEventListener("click", openMenuBtn);
//  closeBtn .addEventListener("click", closeMenuBtn);

