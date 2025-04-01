import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import Swiper from "swiper";

export function plugins() {
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.scrollToPlugin = ScrollToPlugin;

  window.Swiper = Swiper;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
