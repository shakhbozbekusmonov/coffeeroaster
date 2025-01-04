let elMenuBtn = document.querySelector('.site-header__menu-btn')
let elMenuIcon = document.querySelector('.site-header__menu-icon')
let elHiddenHeader = document.querySelector('.hidden-header')

elMenuBtn.addEventListener("click", function(){
	elHiddenHeader.classList.toggle("hidden-header-show")

	if(elHiddenHeader.classList.contains("hidden-header-show")){
		elMenuIcon.src = './images/menu-close-icon.svg'
	} else {
		elMenuIcon.src = './images/menu-icon.svg'
	}
})