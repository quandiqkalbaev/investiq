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
  
      if (window.location.pathname.includes("profile")) {
        sessionStorage.setItem("scrollTarget", target);
        window.location.href = "/";
      } else {
        gsap.to(window, {
          duration: 0.2,
          scrollTo: {
            y: target,
            offsetY: 150,
          },
          ease: "power2",
        });
      }
    });
  });

  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      if (window.location.pathname.includes("profile")) {
        window.location.href = "/";
      } else {
        gsap.to(window, {
          duration: 0.2,
          scrollTo: {
            y: 0,
          },
          ease: "power2",
        });
      }
    });
  });
  
  window.addEventListener("load", () => {
    let target = sessionStorage.getItem("scrollTarget");
  
    if (target) {
      gsap.to(window, {
        duration: 0.2,
        scrollTo: {
          y: target,
          offsetY: 150,
        },
        ease: "power2",
      });
      sessionStorage.removeItem("scrollTarget");
    }
  });
  
}
