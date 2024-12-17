console.log("Hello World!");

const btn = document.getElementById("btn");
let box = document.querySelector(".box");

btn.addEventListener("click", () => {
  box.classList.toggle("active");
  btn.textContent = "Show less...";
});
