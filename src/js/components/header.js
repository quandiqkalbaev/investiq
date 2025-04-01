import { queryMatches } from "./utils.js";

export function header() {
  let headerBtn = document.querySelector(".header__btn"),
    headerMenu = document.querySelector(".header__menu"),
    headerBurger = document.querySelector(".header__burger"),
    headerBlock = document.querySelector(".header");
  if (queryMatches(768)) {
    headerMenu.appendChild(headerBtn);
  }
  headerBurger.addEventListener("click", () => {
    headerBlock.classList.toggle("menu-open");
  });

  let links = document.querySelectorAll(".link__item");
  let logos = document.querySelectorAll("._logo");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let target = link.getAttribute("data-href");
      gsap.to(window, {
        duration: 0.2,
        scrollTo: {
          y: target,
          offsetY:150
        },
        ease: "power2",
      });
      if(headerBlock.classList.contains('menu-open')){
        headerBlock.classList.remove("menu-open");

      }
    });
  });
  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.2,
        scrollTo: {
          y: 0,
        },
        ease: "power2",
      });
    });
  });
}
