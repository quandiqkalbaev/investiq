import { footer } from "./components/footer.js";
import { header } from "./components/header.js";
import { plugins } from "./components/plugins.js";
import { addClassName, queryMatches } from "./components/utils.js";
import about from "./sections/about.js";
import feedback from "./sections/feedback.js";
import mes from "./sections/mes.js";
import team from "./sections/team.js";

plugins();

window.addEventListener("onbeforeunload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});
window.addEventListener("unload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});

window.addEventListener("DOMContentLoaded", () => {
  (async function loading() {
    const mediaElements = gsap.utils.toArray("[data-img]");
    const totalMedia = mediaElements.length;
    let loadedMedia = 0;
    const preloader = document.querySelector(".preloader");
    const preloaderNum = document.querySelector(".preloader__number");
    const introBlock = document.querySelector(".intro");
    const headerBlock = document.querySelector(".header");
    const aboutBlock = document.querySelector(".about");
    const userBlock = document.querySelector(".user");
    function setProgress(percent) {
      preloaderNum.innerHTML = `${percent}%`;
    }
    async function mediaLoaded(e) {
      loadedMedia++;
      const percent = Math.floor((loadedMedia / totalMedia) * 100);
      setProgress(percent);

      if (loadedMedia === totalMedia) {
        setTimeout(() => {
          preloader.classList.add("hidden");
        }, 300);

        setTimeout(() => {
          introBlock?.classList.add("active");
          headerBlock.classList.add("active");
          userBlock?.classList.add("active");
          if (queryMatches(768)) {
            aboutBlock?.classList.add("active");
          }
        }, 600);
        setTimeout(() => {
          // if (queryMatches(769, "min")) {
          // }
        }, 2000);
        header();
        footer();
        about();
        team();
        mes();
        feedback();
      }
    }

    mediaElements.forEach((media) => {
      const dataSrc = media.getAttribute("data-img");
      if (dataSrc) {
        media.onerror = () => {
          console.log(`Ошибка загрузки для ${dataSrc}`);
          mediaLoaded();
        };
        media.setAttribute("src", dataSrc);
        media.onload = mediaLoaded;
      }
    });
  })();
});
