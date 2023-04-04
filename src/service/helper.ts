export function isElement(element: Element | HTMLDocument | Object) {
	return element instanceof Element || element instanceof HTMLDocument
}
export function createWarning() {
	let warrning = document.createElement("span") as any
	let warrningText = "Fill in all the fields or write correct data "
	warrning.textContent = warrningText
	warrning.className = "dream-form_warrning"
	return { warrning, warrningText }
}
