const hamburger = document.querySelector(".hamburger")
const navMenu   = document.querySelector(".nav-menu")
const navLink   = document.querySelectorAll(".nav-link")
const sections  = document.querySelectorAll(".fullpage")

hamburger.addEventListener("click", mobileMenu)

function mobileMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}

navLink.forEach(lien   => lien.addEventListener("click", closeMenu))
sections.forEach(page  => page.addEventListener("click", closeMenu))

function closeMenu() {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}