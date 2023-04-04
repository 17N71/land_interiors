import type { Options } from "@splidejs/splide"
export const blogSliderOptions: Options = {
	perPage: 1,
	focus: "center",
	lazyLoad: "sequential",
	keyboard: "global",
	pagination: false,
	type: "loop",
	label: "Interior blogs",
	mediaQuery: "min",
	gap: 0,
	breakpoints: {
		1775: {
			perPage: 5,
		},
		1445: {
			perPage: 4,
		},
		1085: {
			perPage: 3,
		},
		871: {
			gap: 64,
			perPage: 2,
		},
	},
}
export const costumersSliderOptions: Options = {
	perPage: 1,
	perMove: 1,
	pagination: false,
	lazyLoad: "sequential",
	arrows: true,
	focus: "center",
	start: 0,
	gap: 135,
	type: "loop",
	label: "Interior blogs",
	mediaQuery: "min",
	breakpoints: {
		1080: {
			perPage: 3,
			arrows: false,
		},
	},
}
// intersction observer
export const observerOptions = {
	rootMargin: "-10px",
	threshold: 0,
}
export const intersectionCallback = (enteries: IntersectionObserverEntry[]) => {
	enteries.forEach(entery => {
		if (entery.isIntersecting) {
			if (entery.target instanceof HTMLImageElement) {
				entery.target.src = entery.target.dataset.productsSrc!
			}
		}
	})
}
