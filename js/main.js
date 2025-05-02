let darkMode = document.querySelector(`[src="./images/overview-7.png"]`);
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

let modeToggle = document.querySelector(".switch");
let body = document.querySelector("body");

const sidebar = body.querySelector(".dashbord");
const sidebarToggle = body.querySelector(`[src="./images/togle.svg"]`);

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
