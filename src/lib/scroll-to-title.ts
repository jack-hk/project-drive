const DURATION_MS = 1400;

function easeInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2;
}

let frame = 0;
let scrolling = false;

/** True while a navbar click is easing the page, so the bar stays put. */
export function isProgrammaticScroll(): boolean {
  return scrolling;
}

/** Gradually scrolls so the section title sits just under the navbar. */
export function scrollToTitle(id: string): void {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const title = id === "top" ? document.getElementById("top") : document.getElementById(id);
  const nav = document.querySelector("header");
  const offset = nav instanceof HTMLElement ? nav.offsetHeight + 16 : 80;
  const raw =
    id === "top" || !title ? 0 : title.getBoundingClientRect().top + window.scrollY - offset;
  const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const destination = Math.min(Math.max(0, raw), max);

  cancelAnimationFrame(frame);
  scrolling = true;

  const finish = () => {
    scrolling = false;
    const hash = id === "top" ? "#top" : `#${id}`;
    if (window.location.hash !== hash) history.replaceState(null, "", hash);
  };

  if (reduce || Math.abs(destination - window.scrollY) < 2) {
    window.scrollTo({ top: destination, behavior: "instant" });
    finish();
    return;
  }

  const start = window.scrollY;
  const change = destination - start;
  const started = performance.now();

  const step = (now: number) => {
    const progress = Math.min(1, (now - started) / DURATION_MS);
    window.scrollTo({ top: start + change * easeInOut(progress), behavior: "instant" });
    if (progress < 1) frame = requestAnimationFrame(step);
    else finish();
  };

  frame = requestAnimationFrame(step);
}
