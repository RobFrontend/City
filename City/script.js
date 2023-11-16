"use strict";

// DATA

const year = document.querySelector(".year");
const getYear = new Date();

year.textContent = getYear.getFullYear();

// HERO IMG HOVER AND LINK TO YOUTUBE
const imgHero = document.querySelector(".hero-quote-box");
const quoteHero = document.querySelector(".p-hero");
const adnoHero = document.querySelector(".hero-adnotation");
const hero = document.querySelector(".section-hero");

imgHero.addEventListener("mouseover", function () {
  quoteHero.style.zIndex = "5";
  quoteHero.style.opacity = "1";
  adnoHero.style.visibility = "visible";
  adnoHero.style.opacity = "1";
  setTimeout(() => {
    adnoHero.style.visibility = "hidden";
    adnoHero.style.opacity = "0";
  }, 2000);

  imgHero.addEventListener("mouseout", function () {
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
  const footerText = [`© ${year.textContent} robfrontend`, "Los Angeles"];
  let i = 1;
  setInterval(() => {
    if (triangle.style.opacity === "0.5") {
      triangle.style.opacity = "1";
      copyRight.style.opacity = "0.5";
      copyRight.style.color = "#0e343e";
      copyRight.textContent = footerText[i];
      i = (i + 1) % footerText.length;
    } else {
      triangle.style.opacity = "0.5";
      copyRight.style.color = "#510620";
      copyRight.style.opacity = "0";
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
      imgGallery3.style.display = "inline";
      setTimeout(() => (imgGallery3.style.opacity = "1"), 10);
      // imgGallery3.style.opacity = "1";
      imgGallery1.style.display = "none";
      imgGallery1.style.opacity = "0";
      btnGalleryLeft.style.display = "inline";
      btnGalleryRight.style.display = "none";
    });
    btnGalleryLeft.addEventListener("click", function () {
      imgGallery1.style.display = "inline";
      setTimeout(() => (imgGallery1.style.opacity = "1"), 10);
      // imgGallery1.style.opacity = "1";
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

// NAV Scrolling

// const btnBeach = document.querySelector(".nav-wheel");
// const sectionBeach = document.querySelector("#beach");

// btnBeach.addEventListener("click", function () {
//   sectionBeach.scrollIntoView({ behavior: "smooth" });
// });

// const btnGallery = document.querySelector(".nav-gallery");
// const sectionGallery = document.querySelector("#gallery");

// btnGallery.addEventListener("click", function () {
//   sectionGallery.scrollIntoView({ behavior: "smooth" });
// });

// const btnMore = document.querySelector(".nav-more");
// const sectionMore = document.querySelector("#more");

// btnMore.addEventListener("click", function () {
//   sectionMore.scrollIntoView({ behavior: "smooth" });
// });

const navLinks = document.querySelectorAll(".nav__links");
navLinks.forEach((navLinks) =>
  navLinks.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })
);

// Sticky NAV

const headerHeight = navigation.getBoundingClientRect().height;
console.log(headerHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    navigation.classList.add("stickyNav");
  } else {
    navigation.classList.remove("stickyNav");
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

observer.observe(hero);

// Reveal Sections UP

const reveals = document.querySelectorAll(".reveal");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const revealObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

reveals.forEach(function (reveal) {
  revealObserver.observe(reveal);
  reveal.classList.add("section-hidden");
});

// Reveal features DOWN
const sectionFeature = document.querySelector(".reveal-feature");

const revealFeature = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("feature-hidden");
  observer.unobserve(entry.target);
};

const reavealFeatureObserver = new IntersectionObserver(revealFeature, {
  root: null,
  threshold: 0.5,
});
sectionFeature.classList.add("feature-hidden");
reavealFeatureObserver.observe(sectionFeature);

// Lazy loading imgs

const lazyImgs = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // if (!entry.isIntersecting) {
  //   return;
  // }

  // replace lazy img with normal
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("img-gallery-lazy");
  });

  observer.unobserve(entry.target);
};

const loadObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 1,
  rootMargin: "200px",
});

lazyImgs.forEach((lazyImg) => loadObserver.observe(lazyImg));

////////////////////////////////////
// Slide

// const ifGal3Off = document.querySelector(".img-gallery-box-3");
// const slides = document.querySelectorAll(".slide");

// let curSlide = 0;
// const maxSlide = curSlide.length;

// const doSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${50 * (i - curSlide)}%)`)
//   );
// };

// // Next slide

// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   doSlide(curSlide);
// };

// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else {
//     curSlide--;
//   }
//   doSlide(curSlide);
// };

// if (ifGal3Off.style.opacity === "0") {
//   doSlide(0);
//   btnGalleryRight.addEventListener("click", nextSlide);
//   btnGalleryLeft.addEventListener("click", prevSlide);
// }
