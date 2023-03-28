import "./styles/parts/_variables.scss"
import "./styles/style.scss"
import "./styles/parts/_header.scss"
import "./styles/parts/_home.scss"
const headerMenu = document.querySelector<HTMLButtonElement>(".header-menu")!
const headerNavigation = document.querySelector<HTMLElement>(".header-footer")!
const headerLinks = document.querySelector<HTMLElement>(".header-links")!
let menuState: boolean = false
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
// header
