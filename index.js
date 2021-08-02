
const Nav = document.querySelector(".main-navigation");
const overlay = document.querySelector(".overlay");
const toggle = document.querySelector(".navbar-toggler");

const openNav = () => {
  Nav.classList.add("active");
};
const closeNav = () => {
  Nav.classList.remove("active");
};

toggle.addEventListener("click", openNav);
overlay.addEventListener("click", closeNav);

document.addEventListener("swiped-right", openNav);
document.addEventListener("swiped-left", closeNav);
