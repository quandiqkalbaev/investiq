import { addClassName, removeClassName } from "../components/utils.js";

export default function feedback() {
  let feedback = document.querySelector(".feedback");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: feedback,
      start: "top bottom",
      end: "top 25% ",
      scrub: true,
    },
  });
  tl.from(".feedback__subtitle", {
    y: 300,
    opacity: 0,
  });
  tl.from(
    ".feedback__info-item",
    {
      y: 200,
      stagger: 0.1,
      opacity: 0,
    },
    "<"
  );
  tl.from(
    ".feedback__right",
    {
      opacity: 0,
      y: 300,
    },
    "<"
  );
}
