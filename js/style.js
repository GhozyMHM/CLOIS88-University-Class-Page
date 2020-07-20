var navbar = document.getElementById('web-navbar');

window.onscroll = function () {
    if (window.innerWidth > 700) {
        if (window.pageYOffset > 80) {
            navbar.style.background = "#F67280";
        } else {
            navbar.style.background = "transparent";
        }
    } else {
        if (window.pageYOffset > 80) {
            navbar.style.background = "#F67280";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.849)";
        }
    }
}

$(document).ready(function () {
    $("#carousel-member").carousel('pause');
});