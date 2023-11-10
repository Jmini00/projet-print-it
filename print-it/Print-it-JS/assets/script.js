const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


///// Bullet Points
const areaDots = document.querySelector('.dots');
for (let slide of slides) {
	const htmlToInsert = '<div class="dot"></div>';
	areaDots.insertAdjacentHTML('beforeend', htmlToInsert);
}

const dotsBox = document.querySelectorAll('.dots .dot');
dotsBox[0].classList.add('dot_selected');



///// Events Arrows
const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', (e) => {
	changeSlide(-1);
	dotsBox[numero].classList.add('dot_selected');
	dotsBox[numero + 1].classList.remove('dot_selected');
})

const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', (e) => {
	changeSlide(1);
	dotsBox[numero - 1].classList.remove('dot_selected');
	dotsBox[numero].classList.add('dot_selected');
})


const imageBanner = document.querySelector('.banner-img');
const tagLine = document.querySelector('p');


///// Fonction clic
	let numero = 0;
	const changeSlide = (sens) => {
	numero = numero + sens;
	if (numero < 0)
		numero = slides.length - 1;
	if (numero > slides.length - 1)
		numero = 0;
	imageBanner.src = "./assets/images/slideshow/" + slides[numero].image;
	tagLine.innerHTML = slides[numero].tagLine;
}