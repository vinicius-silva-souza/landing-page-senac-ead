window.addEventListener('load', function () {
    menuFixo();
    window.addEventListener("scroll", menuFixo);
})

function menuFixo() {
    let elHeader = document.querySelector('header');
    let topMenu = document.querySelector('[name="top-menu"]');
    let headerHeight = Number.parseFloat(window.getComputedStyle(elHeader).height);
    let scrollYValue = Number.parseFloat(window.scrollY);
    if (scrollYValue > headerHeight) {
        topMenu.setAttribute('id', 'top-menu-fixed');
        elHeader.style.padding = '0';
    } else {
        topMenu.setAttribute('id', 'top-menu-static');
        elHeader.style.padding = '15px';
    }
}