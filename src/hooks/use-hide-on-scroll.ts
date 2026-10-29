import { useEffect, useState } from "react";
import { isProgrammaticScroll } from "@/lib/scroll-to-title";

const TOP_REVEAL_PX = 8;
const DELTA_PX = 8;

/** True while the page is scrolling downward, away from the top. */
export function useHideOnScrollDown(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (isProgrammaticScroll() || y <= TOP_REVEAL_PX) setHidden(false);
      else if (delta > DELTA_PX) setHidden(true);
      else if (delta < -DELTA_PX) setHidden(false);

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}
