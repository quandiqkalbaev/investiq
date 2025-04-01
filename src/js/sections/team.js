import { addClassName, queryMatches, removeClassName } from "../components/utils.js";

export default function team() {
  let team = document.querySelector(".team");
  gsap.timeline({
    scrollTrigger: {
      trigger: team,
      start: "center bottom",
      end: "center bottom ",
      onEnter: () => addClassName(team),
      onLeaveBack: () => removeClassName(team),
    },
  });
  if (queryMatches(768)) {
    let swiper = new Swiper(".team__swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 2.3,
        },
        480: {
          slidesPerView: 2.7,
        },
        576: {
          slidesPerView: 3,
        },
      },
    });
  }
}
