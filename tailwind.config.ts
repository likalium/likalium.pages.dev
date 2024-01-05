import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
	colors: {
		/* It's Tokyo Night colorscheme!!! */
		"bg": "#24283b",
		"bgDark": "#1f2335",
		"bgHighlight": "#292e42",
		"black": "#1d202f",
		"blue": "#7aa2f7",
		"blue0": "#3d59a1",
		"blue1": "#2ac3de",
		"blue2": "#0db9d7",
		"blue5": "#89ddff",
		"blue6": "#b4f9f8",
		"blue7": "#394b70",
		"cyan": "#7dcfff",
		"dark3": "#545c7e",
		"dark5": "#737aa2",
		"fg": "#c0caf5",
		"fg_dark": "#a9b1d6",
		"fg_gutter": "#3b4261",
		"green": "#9ece6a",
		"green1": "#73daca",
		"green2": "#41a6b5",
		"magenta": "#bb9af7",
		"magenta2": "#ff007c",
		"orange": "#ff9e64",
		"purple": "#9d7cd8",
		"red": "#f7768e",
		"red1": "#db4b4b",
		"teal": "#1abc9c",
		"terminalBlack": "#414868",
		"yellow": "#e0af68"
	},
	 fontFamily: {
		 'josefin': ['"Josefin Sans"'],
		 'jetbrainsmono': ['"JetBrains Mono"'],
		 'inter': ['InterVariable'],
		 'syne': ['Syne']
	 },
    extend: {},
  },
  plugins: [],
} satisfies Config

