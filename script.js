"use script"

let mainleft =document.querySelector(".main-left");
let navMenu=document.querySelector(".navMenu");
let back = document.querySelector(".back")
let openBtn = document.getElementById(".openBtn");
let closeBtn = document.getElementById(".closebtn")

let openMenuBtn = function (){
  back.style.display = "block"
};

let closeMenuBtn = function (){
  back.style.display = "none";
};

openBtn.addEventListener("click", openMenuBtn);
closeBtn.addEventListener("click",closeMenuBtn)



// let mainTitle = document.querySelector(".main__left--title");
// let mainDesc = document.querySelector(".main__left--desc");
// let mainMore = document.querySelector(".main__more");

// let mainRight = document.querySelector(".main__right");

// let openBtn = document.getElementById("main__btn");
// let closeBtn = document.getElementById("close__btn");


// let openMenuBtn = function(){
//   mainMore.style.display = "block"
// };

// let closeMenuBtn = function (){
//   mainMore.style.display = "none"
// };

// openBtn.addEventListener("click", openMenuBtn);
// closeBtn.addEventListener("click",closeMenuBtn)