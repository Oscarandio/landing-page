// Guardamos en variables los elementos necesarios
const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
slider.insertAdjacentElement("afterbegin", sliderSectionLast);

// Función para pasar a la siguiente imagen
const Next = () => {
  let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
};

// Función para pasar a la imagen anterior
const Prev = () => {
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
};

// Damos funcionalidad a los botones
btnRight.addEventListener("click", () => {
  Next();
});

btnLeft.addEventListener("click", () => {
  Prev();
});

// Función para pasar a la siguiente imágen de forma automática cada cinco segundos
setInterval(() => {
  Next();
}, 5000);