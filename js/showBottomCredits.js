var already = false;
try {
    if ($(window).height() >= $(document).height()) {
        checkBottomVisibility();
    }
} catch (e) {
}


$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height() && !already) {
        checkBottomVisibility();
    }
});

function checkBottomVisibility() {
    document.getElementById("bottom").style.visibility = "visible";
    Materialize.fadeInImage('#bottom');
    already = true;
}