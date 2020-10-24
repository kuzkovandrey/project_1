let slideIndex   = 1;
let indicators   = document.getElementsByClassName("slider__item");
let slides 		 = document.getElementsByClassName("slider__slide");
let leftButton   = document.getElementsByClassName("slider__side-button--direction_left")[0];
let rightButton  = document.getElementsByClassName("slider__side-button--direction_right")[0];

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(index) {

	if (index > slides.length) {
		slideIndex = 1;
	}

	if (index < 1) {
		slideIndex = slides.length;
	}
	
	Array.from(slides).forEach(slide => slide.style.display = "none");
	Array.from(indicators).forEach(indicator => indicator.className = "slider__item");

	slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " slider__item--active";
}

Array.from(indicators).reduce((count, indicator) => {
	indicator.setAttribute("onclick", `currentSlide(${count})`);
	return ++count;
}, 1);

leftButton.addEventListener("click", (e) => {
	e.preventDefault();
	showSlides(slideIndex -= 1);

});

rightButton.addEventListener("click", (e) => {
	e.preventDefault();
	showSlides(slideIndex += 1);
});

showSlides(slideIndex);

setInterval(() => {
	showSlides(++slideIndex);
}, 3000);