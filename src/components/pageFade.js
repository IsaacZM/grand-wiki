import { sineOut } from "svelte/easing";

let duration = 250;
let delay = duration;

let delayZero = 0;

export const fadeIn = (_) => ({
  duration,
  delay,
  easing: sineOut,
  css: (t) => `opacity: ${t}; visibility:hidden; position:absolute;`,
});
export const fadeOut = (_) => ({
  duration,
  delay: delayZero,
  easing: sineOut,
  css: (t) => `opacity: ${t}; visibility:hidden; position:absolute;`,
});
