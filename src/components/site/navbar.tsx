import type { MouseEvent } from "react";
import type { NavItem } from "@/content/site";
import { useHideOnScrollDown } from "@/hooks/use-hide-on-scroll";
import { scrollToTitle } from "@/lib/scroll-to-title";

type NavbarProps = {
  brand: string;
  items: readonly NavItem[];
};

export function Navbar({ brand, items }: NavbarProps) {
  const hidden = useHideOnScrollDown();

  const onBrand = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTitle("top");
  };

  const onItem = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToTitle(id);
  };

  return (
    <header
      className="site-nav fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm"
      data-hidden={hidden ? "true" : "false"}
    >
      <nav
        aria-label="Page"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a href="#top" onClick={onBrand} className="flex min-h-11 items-center gap-2">
          <span className="flex h-5 w-5 overflow-hidden rounded-sm" aria-hidden="true">
            <span className="h-full w-1/2 bg-blue" />
            <span className="h-full w-1/2 bg-red" />
          </span>
          <span className="text-lg font-semibold tracking-tight">{brand}</span>
        </a>
        <ul className="flex items-center gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(event) => onItem(event, item.id)}
                className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-ink hover:text-blue-deep"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
