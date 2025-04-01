import { addClassName, removeClassName } from "../components/utils.js";

export default function mes() {
  let mes = document.querySelector(".mes");
  gsap.timeline({
    scrollTrigger: {
      trigger: mes,
      start: "center bottom",
      end: "center bottom ",
      onEnter: () => addClassName(mes),
      onLeaveBack: () => removeClassName(mes),
    },
  });

}
