
const navbar = document.querySelector('.navbar');
const val = document.querySelector('.val');
window.onscroll = () => {
    if (window.scrollY > 1500) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
    val.innerHTML=window.scrollY
};
