"use strict";

// HERO IMG HOVER AND LINK TO YOUTUBE
const imgHero = document.querySelector(".hero-quote-box");
const quoteHero = document.querySelector(".p-hero");
const adnoHero = document.querySelector(".hero-adnotation");

imgHero.addEventListener("mouseover", function () {
  quoteHero.style.zIndex = "5";
  quoteHero.style.opacity = "1";
  adnoHero.style.visibility = "visible";
  adnoHero.style.opacity = "1";
  setTimeout(() => {
    adnoHero.style.visibility = "hidden";
    adnoHero.style.opacity = "0";
  }, 2000);

  imgHero.addEventListener("mouseleave", function () {
    quoteHero.style.zIndex = "-1";
    quoteHero.style.opacity = "0";
    quoteHero.style.opacity = "0";
    adnoHero.style.visibility = "hidden";
  });
});
imgHero.addEventListener("click", function () {
  window.open("https://www.youtube.com/watch?v=JlSsbNc0_u0", "_blank");
});

// TRIANGLE OPACITY

const triangle = document.querySelector(".triangle");

const changeOpacity = function () {
  setInterval(() => {
    if (triangle.style.opacity === "0.5") {
      triangle.style.opacity = "1";
    } else {
      triangle.style.opacity = "0.5";
    }
  }, 1000);
};
changeOpacity();

///////////////////////////////////////
// TABLET SIZE ADNOTATION TIME

const tabletMQ = window.matchMedia("(max-width: 50em)");

function checkIfTablet() {
  if (window.innerWidth < 1025) {
    adnoHero.style.visibility = "visible";
    adnoHero.style.opacity = "1";
    setTimeout(() => {
      adnoHero.style.visibility = "hidden";
      adnoHero.style.opacity = "0";
    }, 3000);
    setInterval(() => {
      if (quoteHero.style.opacity === "0") {
        quoteHero.style.opacity = "0.2";
      } else {
        quoteHero.style.opacity = "0";
      }
    }, 2000);
  }
}
checkIfTablet();
//window.addEventListener("resize", checkIfTablet);
