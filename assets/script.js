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
]
let indexCourant = 0;
const imageBanner = document.querySelector(".banner-img");
const texteBanner = document.querySelector("#banner p");
//let baliseBanner = document.getElementById("banner");
//console.log(baliseBanner);
const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");
console.log(flecheGauche);
console.log(flecheDroite);
flecheGauche.addEventListener("click", () => {
	console.log("Clique sur fleche de gauche")
});
flecheDroite.addEventListener("click", () => {
	console.log("Clique sur fleche de droite")
});
const conteneurDots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	conteneurDots.appendChild(dot);
}
flecheDroite.addEventListener("click", () => {
	indexCourant = indexCourant + 1;
	imageBanner.src = "./assets/images/slideshow/" + slides[indexCourant].image;
	texteBanner.innerHTML = slides[indexCourant].tagLine;
	console.log("index actuel apres clic droit:", indexCourant);
})
flecheGauche.addEventListener("click", () => {
	indexCourant = indexCourant - 1;
	imageBanner.src = "./assets/images/slideshow/" + slides[indexCourant].image;
	texteBanner.innerHTML = slides[indexCourant].tagLine;
	console.log("index actuel apres clic gauche:", indexCourant);
})
function mettreAJourPoints() {
	const toutLesPoints = document.querySelectorAll("dot.dots");
	tousLesPoints.forEach((dot, index) => {
		if (index === indexCourant) {
			dot.classList.add("dot_selected"); 
		} else {
			dot.classList.remove("dot_selected"); 
		}
	});
}
