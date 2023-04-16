const colorPalette = {
	blue: {
		primary: "#517FA1",
		secondary: "#6DA6C5",
	},
	green: {
		primary: "#48A9A6",
		secondary: "#70C2BF",
	},
	beige: {
		primary: "#E4DFDA",
		secondary: "#B9B1A2",
	},
	yellow: {
		primary: "#D4B483",
		secondary: "#EADAC2",
	},
	red: {
		primary: "#C1666B",
		secondary: "#DCA8AA",
	},
	white: "#F6F5F3",
	black: "#171512",
};

export const theme = {
	colors: {
		primary: colorPalette.blue.primary,
		secondary: colorPalette.green.primary,
		accent: colorPalette.yellow.primary,
		text: colorPalette.black,
		background: colorPalette.white,
		muted: colorPalette.beige.primary,
		highlight: colorPalette.yellow.secondary,
		warning: colorPalette.red.primary,
		white: colorPalette.white,
		black: colorPalette.black,
	},

	fonts: {
		primary: "Roboto, sans-serif",
		heading: "Roboto, sans-serif",
		body: "Roboto, sans-serif",
	},
};
