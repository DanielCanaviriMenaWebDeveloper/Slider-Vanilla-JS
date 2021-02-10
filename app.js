const slider = document.querySelector("#slider"); /* Contenedor padre de las imagenes */
let sliderSection = document.querySelectorAll(".slider__section"); /* NodeList con todas las imagenes */
let sliderSectionLast = sliderSection[sliderSection.length - 1]; /* Obtiene la ultima imagen del NodeList */
const btnLeft = document.querySelector("#btn-left"); /* Boton Isquierdo */
const btnRight = document.querySelector("#btn-right"); /* Boton Derecho */

/* Insertaremos la ultima imagen al comienzo */
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

console.log('#slider');
console.log( slider );

console.log(".slider__section");
console.log( sliderSection );

console.log("Ultimo slider__section")
console.log( sliderSectionLast );

console.log('Boton Isquierda');
console.log( btnLeft );

console.log('Boton Derecha')
console.log( btnRight );

function moveRight() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]; /* Selecciono al primer div.slider__section del NodeList */
    console.log('Primer slider__section');
    console.log( sliderSectionFirst );
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moveLeft() {
    let sliderSection = document.querySelectorAll('.slider__section');
	let sliderSectionLast = sliderSection[sliderSection.length - 1];
	
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function () {
		slider.style.transition = "none";
		slider.insertAdjacentElement("afterbegin", sliderSectionLast);
		slider.style.marginLeft = "-100%";
	}, 500);
}



btnRight.addEventListener('click', function() {
    moveRight();
});

btnLeft.addEventListener('click', function() {
    moveLeft();
});

setInterval(() => {
    moveRight();
}, 5000);

