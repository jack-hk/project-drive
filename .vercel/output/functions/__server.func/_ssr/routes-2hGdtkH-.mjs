import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as GraduationCap, r as HeartHandshake, t as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2hGdtkH-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	brand: "Meridian",
	nav: [{
		id: "about",
		label: "About",
		href: "#about"
	}, {
		id: "contact",
		label: "Contact",
		href: "#contact"
	}],
	hero: {
		image: {
			src: "/images/hero.jpg",
			alt: "A silver car parked on a quiet tree-lined street",
			width: 1600,
			height: 900
		},
		kicker: "Driving school",
		title: "Meridian Driving",
		lede: "Patient lessons for new drivers, at a pace that fits.",
		action: {
			href: "#contact",
			label: "Contact"
		}
	},
	stats: [
		{
			id: "years",
			label: "20+ Years of teaching"
		},
		{
			id: "students",
			label: "Passed 100+ students"
		},
		{
			id: "inclusive",
			label: "Inclusive and for everyone"
		}
	],
	about: {
		id: "about",
		title: "About Us",
		subtitle: "About US",
		paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
	},
	testimonials: [
		{
			id: "maya",
			name: "Maya Chen",
			quote: "I was nervous behind the wheel. A few lessons in, I was the one reminding my brother to check the mirrors.",
			image: "/images/reviews/maya.jpg",
			alt: "Portrait of Maya Chen"
		},
		{
			id: "jonah",
			name: "Jonah Ellis",
			quote: "Calm, precise, and never once made me feel behind the rest of the class.",
			image: "/images/reviews/jonah.jpg",
			alt: "Portrait of Jonah Ellis"
		},
		{
			id: "amira",
			name: "Amira Haddad",
			quote: "The first school that treated different starting points as normal, not something to rush past.",
			image: "/images/reviews/amira.jpg",
			alt: "Portrait of Amira Haddad"
		},
		{
			id: "kenji",
			name: "Kenji Mori",
			quote: "I passed the road test I had failed twice. More than that, I understood why.",
			image: "/images/reviews/kenji.jpg",
			alt: "Portrait of Kenji Mori"
		},
		{
			id: "priya",
			name: "Priya Nair",
			quote: "Inclusive is not a line on the door. The lesson actually fits different paces.",
			image: "/images/reviews/priya.jpg",
			alt: "Portrait of Priya Nair"
		},
		{
			id: "helen",
			name: "Helen Brooks",
			quote: "Twenty minutes in, I stopped apologizing for asking to try the maneuver again.",
			image: "/images/reviews/helen.jpg",
			alt: "Portrait of Helen Brooks"
		}
	],
	contact: {
		id: "contact",
		title: "Contact",
		phone: {
			display: "(415) 555-0142",
			href: "tel:+14155550142"
		},
		socials: [
			{
				id: "facebook",
				label: "Facebook",
				href: "https://www.facebook.com/"
			},
			{
				id: "instagram",
				label: "Instagram",
				href: "https://www.instagram.com/"
			},
			{
				id: "tiktok",
				label: "TikTok",
				href: "https://www.tiktok.com/"
			}
		],
		image: {
			src: "/images/contact.jpg",
			alt: ""
		}
	}
};
function AboutSection({ about }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "about",
		className: "px-5 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-widest text-red uppercase",
					children: about.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "about",
					className: "mt-3 scroll-mt-20 text-3xl font-semibold text-ink md:text-4xl",
					children: about.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4 text-base leading-relaxed text-stone",
					children: about.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 24)))
				})
			]
		})
	});
}
function FacebookIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M14.5 8H17V5h-2.5C12 5 10 7 10 9.5V11H8v3h2v7h3v-7h2.4l.6-3H13V9.5c0-.8.7-1.5 1.5-1.5z"
		})
	});
}
function InstagramIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.4 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
		})
	});
}
function TikTokIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M14.5 3v11.2a2.7 2.7 0 1 1-2.7-2.7c.2 0 .5 0 .7.1V8.8a5.6 5.6 0 0 0-.7 0 5.5 5.5 0 1 0 5.5 5.4V8.2A6.7 6.7 0 0 0 21 9.6V6.8a3.9 3.9 0 0 1-3.2-1.6A4 4 0 0 1 16.7 3z"
		})
	});
}
var ICONS = {
	facebook: FacebookIcon,
	instagram: InstagramIcon,
	tiktok: TikTokIcon
};
function SocialIcon({ id, className }) {
	const Icon = ICONS[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className });
}
function ContactSection({ contact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "contact",
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: contact.image.src,
			alt: contact.image.alt,
			className: "absolute inset-0 h-full w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex items-center justify-center px-5 py-10 md:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-lg bg-paper px-6 py-8 text-center shadow-sm md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "contact",
						className: "scroll-mt-20 text-3xl font-semibold text-ink md:text-4xl",
						children: contact.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: contact.phone.href,
						className: "mt-4 block text-3xl font-semibold text-blue-deep md:text-4xl",
						children: contact.phone.display
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm font-semibold tracking-widest text-stone uppercase",
						children: "Follow us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex items-center justify-center gap-4",
						children: contact.socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: social.href,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": social.label,
							className: "press inline-flex size-16 items-center justify-center rounded-full bg-blue-deep text-paper hover:bg-red",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcon, {
								id: social.id,
								className: "size-10"
							})
						}) }, social.id))
					})
				]
			})
		})]
	});
}
var DURATION_MS = 1400;
function easeInOut(t) {
	return t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}
var frame = 0;
var scrolling = false;
/** True while a navbar click is easing the page, so the bar stays put. */
function isProgrammaticScroll() {
	return scrolling;
}
/** Gradually scrolls so the section title sits just under the navbar. */
function scrollToTitle(id) {
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const title = id === "top" ? document.getElementById("top") : document.getElementById(id);
	const nav = document.querySelector("header");
	const offset = nav instanceof HTMLElement ? nav.offsetHeight + 16 : 80;
	const raw = id === "top" || !title ? 0 : title.getBoundingClientRect().top + window.scrollY - offset;
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
		window.scrollTo({
			top: destination,
			behavior: "instant"
		});
		finish();
		return;
	}
	const start = window.scrollY;
	const change = destination - start;
	const started = performance.now();
	const step = (now) => {
		const progress = Math.min(1, (now - started) / DURATION_MS);
		window.scrollTo({
			top: start + change * easeInOut(progress),
			behavior: "instant"
		});
		if (progress < 1) frame = requestAnimationFrame(step);
		else finish();
	};
	frame = requestAnimationFrame(step);
}
function Hero({ hero }) {
	const onContact = (event) => {
		event.preventDefault();
		scrollToTitle("contact");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "hero-title",
		className: "pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: hero.image.src,
			alt: hero.image.alt,
			width: hero.image.width,
			height: hero.image.height,
			className: "block h-64 w-full object-cover sm:h-80 md:h-[28rem]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 -mt-12 max-w-xl bg-paper px-6 py-8 shadow-sm md:-mt-20 md:px-8 md:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold tracking-widest text-blue uppercase",
						children: hero.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "hero-title",
						className: "mt-3 text-4xl leading-tight font-semibold text-ink md:text-5xl",
						children: hero.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-lg leading-relaxed text-stone",
						children: hero.lede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: hero.action.href,
						onClick: onContact,
						className: "press mt-6 inline-flex min-h-11 items-center rounded-full bg-blue-deep px-6 text-sm font-semibold text-paper hover:bg-blue-ink",
						children: hero.action.label
					})
				]
			})
		})]
	});
}
var TOP_REVEAL_PX = 8;
var DELTA_PX = 8;
/** True while the page is scrolling downward, away from the top. */
function useHideOnScrollDown() {
	const [hidden, setHidden] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			const delta = y - lastY;
			if (isProgrammaticScroll() || y <= TOP_REVEAL_PX) setHidden(false);
			else if (delta > DELTA_PX) setHidden(true);
			else if (delta < -8) setHidden(false);
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return hidden;
}
function Navbar({ brand, items }) {
	const hidden = useHideOnScrollDown();
	const onBrand = (event) => {
		event.preventDefault();
		scrollToTitle("top");
	};
	const onItem = (event, id) => {
		event.preventDefault();
		scrollToTitle(id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "site-nav fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm",
		"data-hidden": hidden ? "true" : "false",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Page",
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				onClick: onBrand,
				className: "flex min-h-11 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex h-5 w-5 overflow-hidden rounded-sm",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-full w-1/2 bg-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-full w-1/2 bg-red" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-semibold tracking-tight",
					children: brand
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex items-center gap-1",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: (event) => onItem(event, item.id),
					className: "inline-flex min-h-11 items-center px-3 text-sm font-medium text-ink hover:text-blue-deep",
					children: item.label
				}) }, item.id))
			})]
		})
	});
}
var STAT_ICONS = {
	years: GraduationCap,
	students: Users,
	inclusive: HeartHandshake
};
function StatsBand({ stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "At a glance",
		className: "bg-blue-deep text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid max-w-6xl grid-cols-3",
			children: stats.map((stat, index) => {
				const Icon = STAT_ICONS[stat.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: index === 0 ? "flex flex-col items-center gap-2 px-3 py-5 text-center text-sm leading-snug font-medium text-balance md:px-6 md:py-6 md:text-base" : "flex flex-col items-center gap-2 border-l border-blue-line px-3 py-5 text-center text-sm leading-snug font-medium text-balance md:px-6 md:py-6 md:text-base",
					children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-7",
						strokeWidth: 1.75,
						"aria-hidden": "true"
					}) : null, stat.label]
				}, stat.id);
			})
		})
	});
}
function Testimonials({ testimonials }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "reviews-title",
		className: "bg-mist px-5 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "reviews-title",
				className: "text-3xl font-semibold text-ink md:text-4xl",
				children: "Testimonials"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: testimonials.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "overflow-hidden rounded-lg border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: review.image,
						alt: review.alt,
						width: 800,
						height: 1067,
						className: "aspect-square w-full object-cover object-top"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex flex-col gap-4 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-base leading-relaxed text-ink",
							children: [
								"“",
								review.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "text-sm font-medium text-stone",
							children: review.name
						})]
					})]
				}, review.id))
			})]
		})
	});
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
		brand: site.brand,
		items: site.nav
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { hero: site.hero }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, { stats: site.stats }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, { about: site.about }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, { testimonials: site.testimonials }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { contact: site.contact })
		]
	})] });
}
var SplitComponent = LandingPage;
//#endregion
export { SplitComponent as component };
