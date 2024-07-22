const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const righttEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter",()=>{
    containerEl.classList.add("active-left");
});