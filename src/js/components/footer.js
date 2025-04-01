import { queryMatches } from "./utils.js";

export function footer() {
  let footerBurger = document.querySelector(".footer__burger"),
    footerBlock = document.querySelector(".footer");

  footerBurger.addEventListener("click", () => {
    footerBlock.classList.toggle("fmenu-open");
  });
}
