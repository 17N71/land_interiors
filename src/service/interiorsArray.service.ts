interface IInteriorsArray {
	src: string
	title: string
	sizes: {
		height: string
		width: string
	}
}
export const interiorsArray: Readonly<IInteriorsArray[]> = [
	{
		src: "./assets/cards/card1.webp",
		title: "50 days or we pay you rent",
		sizes: {
			width: "68",
			height: "68",
		},
	},
	{
		src: "./assets/cards/card2.webp",
		title: "1500+happy customers",
		sizes: {
			width: "72",
			height: "72",
		},
	},
	{
		src: "./assets/cards/card3.webp",
		title: "300+ design experties",
		sizes: {
			width: "62",
			height: "62",
		},
	},
]
