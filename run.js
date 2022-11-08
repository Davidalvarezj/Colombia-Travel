
const navbar = document.querySelector('.navbar');
const dropdown = document.querySelector('.dropdown-menu');
window.onscroll = () => {
    if (window.scrollY > 170) {
        navbar.classList.add('nav-active');
        dropdown.classList.add('dropdown-dark')
    } else {
        navbar.classList.remove('nav-active');
        dropdown.classList.remove('dropdown-dark');
    }
    val.innerHTML=window.scrollY
};
