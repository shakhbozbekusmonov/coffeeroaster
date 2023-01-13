
// Get elements
var elMenuBtn = document.querySelector('.menu-btn');
var elHiddenHeader = document.querySelector('.hidden-header');
var elMenuImg = document.querySelector('.menu-burger-img');

var icon = true;

elMenuBtn.addEventListener('click', function() {
    elHiddenHeader.classList.toggle('shownav');

    if(!icon){
        elMenuImg.src = "../images/menu-burger.svg";
        icon = true;
    } else {
        elMenuImg.src = "../images/menu-burger-close.svg";
        icon = false;
    }
});