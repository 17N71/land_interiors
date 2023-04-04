// styles
import "@splidejs/splide/css"
import "atropos/scss"
import "../styles/parts/_blogs.scss"
import "../styles/parts/_dream.scss"
import "../styles/parts/_footer.scss"
import "../styles/parts/_header.scss"
import "../styles/parts/_home.scss"
import "../styles/parts/_interiors.scss"
import "../styles/parts/_our_costumers.scss"
import "../styles/parts/_our_products.scss"
import "../styles/parts/_our_projects.scss"
import "../styles/parts/_reset.scss"
import "../styles/parts/_variables.scss"
import "../styles/parts/_wwd.scss"
import "../styles/style.scss"
// modules
import Splide from "@splidejs/splide"
import Atropos from "atropos"
import { blogsArray } from "../service/blogs.service"
import { interiorsArray } from "../service/interiorsArray.service"
import {
	blogSliderOptions,
	costumersSliderOptions,
	intersectionCallback,
	observerOptions,
} from "./options"
// on load
window.addEventListener("load", function () {
	// variables
	const headerMenu = document.querySelector<HTMLButtonElement>(".header-menu")!
	const headerNavigation = document.querySelector<HTMLElement>(".header-footer")!
	const headerLinks = document.querySelector<HTMLElement>(".header-links")!
	const interiorsCards = document.querySelector<HTMLDivElement>(".interiors-cards")!
	const blogsCards = document.querySelector<HTMLDivElement>(".blogs-cards")!
	const splideList = blogsCards.querySelector<HTMLUListElement>(".blogs-splide ul.splide__list")!
	const dreamForm: HTMLFormElement = document.forms[0]
	const emailInput = dreamForm.querySelector<HTMLInputElement>("input.dream-form_email-or_phone")!
	const navgationScrollTo = document.querySelectorAll("[data-scroll-to]")
	const productsSrc = document.querySelectorAll("[data-products-src]")
	const emailOrArmenianPhoneNumber: RegExp =
		/(((^[0]+\d{8})|([+]+\d{3}\d{8}))|(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,10})+$))/gim
	let menuState: boolean = false
	// header
	headerMenu.addEventListener("click", () => {
		menuState = !menuState
		if (menuState) {
			headerMenu.classList.add("active")
			headerNavigation.classList.add("active")
			headerLinks.classList.add("active")
			document.body.style.overflow = "hidden"
		} else {
			headerMenu.classList.remove("active")
			headerNavigation.classList.remove("active")
			headerLinks.classList.remove("active")
			document.body.removeAttribute("style")
		}
	})
	// smooth scroll navigation
	navgationScrollTo.forEach(navgation => {
		let locationToScroll = navgation.getAttribute("data-scroll-to")
		navgation.addEventListener("click", e => {
			e.preventDefault()
			let elementToScroll = document.querySelector(`[data-scroll-end="${locationToScroll}"]`)
			let top = elementToScroll?.getBoundingClientRect().top
			window.scrollTo({
				top: top,
			})
		})
	})
	// atropos
	interiorsArray.forEach((item, index) => {
		interiorsCards.innerHTML += `
  <div class="atropos my-atropos my-atropos-${index}">
    <div class="atropos-scale ">
      <div class="atropos-rotate">
        <div class="atropos-inner">
      	  <div class="interiors-cards">
					  <div class="interiors-card">
						  <img
							  src="${item.src}"
							  width="${item.sizes.width}"
							  height="${item.sizes.height}"
							  alt="${item.title}"
							  title="${item.title}"
							  loading="lazy"
						  />
						<p class="interiors-card_title">${item.title}</p>
					</div>
        </div>
      </div>
    </div>
  </div>
  `
	})
	// initalization
	const myA = Atropos({
		el: `.my-atropos-0`,
	})
	const myA1 = Atropos({
		el: `.my-atropos-1`,
	})
	const myA2 = Atropos({
		el: `.my-atropos-2`,
	})
	// for forEach cicle
	const atroposes = [myA, myA1, myA2]
	// destory on tablets and phones
	window.addEventListener("resize", () => {
		atroposes.forEach(atr => {
			if (window.innerWidth < 1040) {
				atr.destroy()
			}
		})
	})
	if (window.innerWidth < 1040) {
		atroposes.forEach(atr => {
			atr.destroy()
		})
	}
	// products intersection observer
	let observer = new IntersectionObserver(intersectionCallback, observerOptions)
	productsSrc.forEach(product => {
		observer.observe(product)
	})
	// interiors cards with atropos 3d effect
	blogsArray.forEach(blog => {
		splideList.innerHTML += `
    <li class="splide__slide ">
      <div class="blogs-cards_card">
        <img src="${blog.src}" width="333" height="329" alt="${blog.title}" title="${blog.title}" loading="lazy" />
        <h3 class="blogs-cards_card-title">${blog.title}</h3>
        <p class="blogs-cards_card-description">${blog.description}<p>
       </div>
    </li>
  `
	})
	// sliders splide
	// initalization
	new Splide(".splide.blogs-splide", blogSliderOptions).mount()
	new Splide(".splide.our_costumers-splide", costumersSliderOptions).mount()
	// form validation
	dreamForm.addEventListener("submit", function (e) {
		e.preventDefault()
		if (!emailOrArmenianPhoneNumber.test(emailInput.value)) {
			throw new Error("Write correct emial or phone number")
		}
		alert("We answer you later")
	})
})
