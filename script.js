let btn = document.querySelector('#nav-icon3')

btn.addEventListener('click', function () {
    console.log(this.classList.toggle('open'));
} )