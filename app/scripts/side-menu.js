(function() {


let menuOpenButton = document.getElementsByClassName("header__menu-icon")[0];
let menuCloseButton = document.getElementsByClassName("menu__close-button")[0];
let menu = document.getElementsByClassName("menu")[0];


menuOpenButton.addEventListener("click", (e) => {
	e.preventDefault();
	menu.style.transform = "translateX(-300px)";

});

menuCloseButton.addEventListener("click", (e) => {
	e.preventDefault();
	menu.style.transform = "";

});



})();