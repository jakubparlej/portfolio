// document.addEventListener("DOMContentLoaded", () => {
//   const rootElement = document.querySelector("#root");
//   const sections = document.querySelectorAll("section");
//   let currentSectionIndex = 0;
//   let isThrottled = false;

//   sections[currentSectionIndex].scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });

//   document.addEventListener("wheel", (event) => {
//     if (isThrottled) return;
//     isThrottled = true;

//     setTimeout(() => {
//       isThrottled = false;
//     }, 500);

//     const direction = event.deltaY > 0 ? 1 : -1;

//     if (direction === 1) {
//       const isLastSection = currentSectionIndex === sections.length - 1;
//       if (isLastSection) return;
//     } else if (direction === -1) {
//       const firstSection = currentSectionIndex === 0;
//       if (firstSection) return;
//     }

//     currentSectionIndex = currentSectionIndex + direction;

//     sections[currentSectionIndex].scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: "coverflow",
  // centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    modifier: 2,
    depth: 0,
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      spaceBetween: 32,
    },
  },
});

// Menu trigger

const menuBtn = document.getElementById("menuBtn");
const navMobile = document.querySelector(".nav-mobile");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const navMobileLi = document.querySelectorAll(".nav-mobile__item");

console.log(navMobileLi);

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-btn--active");
  navMobile.classList.toggle("nav-mobile--active");
  header.classList.toggle("header--active");
  body.classList.toggle("no-scroll");
});

navMobileLi.forEach((item) => {
  item.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-btn--active");
    navMobile.classList.toggle("nav-mobile--active");
    header.classList.toggle("header--active");
    body.classList.toggle("no-scroll");
  });
});

// GSAP ScrollTrigger

const revealFromBottom = gsap.utils.toArray(".revealFromBottom");
const revealFromLeft = gsap.utils.toArray(".revealFromLeft");

revealFromBottom.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 70%",
      ease: "expo",
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });
});

revealFromLeft.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 70%",
      ease: "expo",
    },
    x: -100,
    opacity: 0,
    duration: 1,
  });
});

gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    ease: "expo",
  },
  opacity: 0,
  duration: 1,
});

gsap.from(".header", {
  // y: 50,
  opacity: 0,
  duration: 1,
});

// Menu items active on scroll

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav__item");
const navMobileLI = document.querySelectorAll(".nav-mobile__item");
const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset > sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  navMobileLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  if (window.pageYOffset > 200) {
    scrollTop.classList.add("scroll-top--active");
  } else {
    scrollTop.classList.remove("scroll-top--active");
  }
});

// Scroll to top button
