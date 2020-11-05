let slideIndex   = 0;
let indicators   = document.getElementsByClassName("indicators__item");
let slides 		 = document.getElementsByClassName("slider__slide");
let leftButton   = document.getElementsByClassName("slider__side-button--direction_left")[0];
let rightButton  = document.getElementsByClassName("slider__side-button--direction_right")[0];

function currentSlide(n) {
	clearInterval(timer);
	showSlides(slideIndex = n);

	timer = setInterval(() => {
		showSlides(++slideIndex);
		}, interval);
}

function showSlides(index) {

	if (index >= slides.length) {
		slideIndex = 0;
	}

	if (index < 0) {
		slideIndex = slides.length - 1;
	}

	Array.from(indicators).forEach(indicator => indicator.className = "slider__item");
	Array.from(slides).forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
    indicators[slideIndex].className += " slider__item--active";
}

Array.from(indicators).reduce((count, indicator) => {
	indicator.setAttribute("onclick", `currentSlide(${count})`);
	return ++count;
}, 0);


let interval = 5000;
let timer = setInterval(() => {
	showSlides(++slideIndex);
}, interval);


leftButton.addEventListener("click", (e) => {
	e.preventDefault();
	clearInterval(timer);
	showSlides(--slideIndex);
	timer = setInterval(() => {
		showSlides(++slideIndex);
		}, interval);

});

rightButton.addEventListener("click", (e) => {
	e.preventDefault();
	clearInterval(timer);
	showSlides(++slideIndex);
	timer = setInterval(() => {
		showSlides(++slideIndex);
		}, interval);
});

showSlides(slideIndex); 

