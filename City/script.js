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

// TRIANGLE OPACITY and Footer copyright INTERVAL
const copyRight = document.querySelector(".copy");
const triangle = document.querySelector(".triangle");

const changeOpacity = function () {
  setInterval(() => {
    if (triangle.style.opacity === "0.5") {
      triangle.style.opacity = "1";
      copyRight.style.opacity = "0.8";
      copyRight.style.color = "#0e343e";
    } else {
      triangle.style.opacity = "0.5";
      copyRight.style.color = "#510620";
      copyRight.style.opacity = "0.6";
    }
  }, 1000);
};
changeOpacity();

////////////////////////////////////////////
// TABLET SIZE ADNOTATION TIME

const tabletMQ = window.matchMedia("(max-width: 50em)");

// Gallery buttons and imgs
const btnGalleryLeft = document.querySelector(".button-gallery-left");
const btnGalleryRight = document.querySelector(".button-gallery-right");

const imgGallery1 = document.querySelector(".img-gallery-box-1");
const imgGallery2 = document.querySelector(".img-gallery-box-2");
const imgGallery3 = document.querySelector(".img-gallery-box-3");

function checkIfTablet() {
  if (window.innerWidth < 1025) {
    // gallery buttons and imgs
    btnGalleryRight.addEventListener("click", function () {
      imgGallery3.style.opacity = "1";
      imgGallery3.style.display = "inline";
      imgGallery1.style.display = "none";
      imgGallery1.style.opacity = "0";
      btnGalleryLeft.style.display = "inline";
      btnGalleryRight.style.display = "none";
    });
    btnGalleryLeft.addEventListener("click", function () {
      imgGallery1.style.opacity = "1";
      imgGallery1.style.display = "inline";
      imgGallery3.style.opacity = "0";
      imgGallery3.style.display = "none";
      btnGalleryRight.style.display = "inline";
      btnGalleryLeft.style.display = "none";
    });
    // adnotation to hero youtube
    adnoHero.style.visibility = "visible";
    adnoHero.style.opacity = "1";
    setTimeout(() => {
      adnoHero.style.visibility = "hidden";
      adnoHero.style.opacity = "0";
    }, 3000);
    setInterval(() => {
      setTimeout(() => {
        quoteHero.style.opacity = "0";
      }, 10000);
      if (quoteHero.style.opacity === "0") {
        quoteHero.style.opacity = "0.2";
      } else {
        quoteHero.style.opacity = "0";
      }
    }, 2000);
  } else {
    imgGallery3.style.opacity = "1";
    imgGallery3.style.display = "inline";
    imgGallery1.style.opacity = "1";
    imgGallery1.style.display = "inline";
    btnGalleryRight.style.display = "none";
    btnGalleryLeft.style.display = "none";
  }
}
checkIfTablet();
// window.addEventListener("resize", checkIfTablet);

//////////////////////////////////////////
// Mobile navigation

const btnMobile = document.querySelector(".btn-mobile-nav");
const navigation = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav-link");

btnMobile.addEventListener("click", function () {
  navigation.classList.toggle("nav-open");
});
navLink.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navigation.classList.remove("nav-open");
  });
});
// DATA

const year = document.querySelector(".year");
const getYear = new Date();

year.textContent = getYear.getFullYear();
