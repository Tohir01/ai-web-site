const nav = document.querySelector(".navigation__main");
const navOpenBtn = document.querySelector(".navigation__open-icon");
const navCloseBtn = document.querySelector(".navigation__close-icon");

navOpenBtn.addEventListener('click',() => {
    nav.classList.add("open")
});
navCloseBtn.addEventListener('click', () => {
    nav.classList.remove("open")
});