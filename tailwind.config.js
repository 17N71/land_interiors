module.exports = {
	content: ["./dist/**/*.{html,htm,js}", "./src/**/*.{html,,js}"],
	theme: {
		extend: {
			colors: {
				purple: "#4b2a63",
				darkPurple: "#241330",
				textPurple: "#451a64 ",
			},
			screens: {
				lg: "1240px",
				lm: "1080px",
				slm: "871px",
				sslm: "650px",
				ssm: "450px",
			},
		},
	},
}
