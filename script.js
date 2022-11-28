let btn = document.querySelector('#nav-icon3')
let burger_navbar = document.querySelector('.burger-navbar')

btn.addEventListener('click', function () {
    this.classList.toggle('open')
    burger_navbar.classList.toggle('visible')
} )