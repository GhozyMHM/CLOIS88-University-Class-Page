var navbar = document.getElementById('web-navbar');

window.onscroll = function () {
    if (window.pageYOffset > 80) {
        navbar.style.background = "#F67280";
    } else {
        navbar.style.background = "#1f2133";
    }
}