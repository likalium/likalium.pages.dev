// By likalium :)

import {
	Links,
	Link,
	Meta,
	MetaFunction,
	Outlet,
	Scripts,
	LiveReload,
	ScrollRestoration,
} from "@remix-run/react";

import { GithubLogo, DiscordLogo } from "@phosphor-icons/react"

import type { LinksFunction } from "@remix-run/node";

import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "./favicon.ico"},
  { rel: "preload", href: "./assets/newton.jpg" },
  { rel: "preload", href: "./assets/spirit.jpg" },
  { rel: "preload", href: "./assets/Tux.svg" },
  { rel: "preload", href: "./assets/torvalds.jpg" },
  { rel: "preload", href: "./assets/arch.png" },
  { rel: "preload", href: "./assets/nixos.png" },
  { rel: "preload", href: "./assets/debian.png" },
  { rel: "preload", href: "./assets/voidlinux.png" },
  { rel: "preload", href: "./assets/mfdoom.jpg" },
  { rel: "preload", href: "./assets/mfdoomlarge.jpg" },
  { rel: "preload", href: "./assets/madvillainy.jpg" },
  { rel: "preload", href: "./assets/mmfood.jpg" },
  { rel: "preload", href: "./vaudevillevillain.jpg" }
];

export const meta: MetaFunction = () => {
	return [
		{ title: "Like a website" },
	]
}
// COMPONENTS
// Navbar

function NavBarLink({link, text}: {link: string; text: string}) {
	return (
		<li className="inline-block nav-url p-2"><Link to={link}>{text}</Link></li>
	)
}


export default function App() {
	return (
		<html lang="en" className="scroll-pt-20 scroll-smooth">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="text-fg bg-bg text-lg">
				<nav className="sticky top-0 font-['Rajdhani'] p-3 text-black bg-gradient-to-r from-orange to-red1 border-blue border-b-2">
					<ul>
						<div className="flex flex-row justify-between">
							<div>
								<NavBarLink link="/#home" text="Home" />
								<NavBarLink link="/#projects" text="My projects" />
								<NavBarLink link="/#about" text="About me" />
							</div>
							<div>
								<NavBarLink link="/english-presentation" text="English presentation" />
							</div>
						</div>
					</ul>
				</nav>
				<div className="p-3 lg:p-6">
					<Outlet />
				</div>
				<Scripts />
				<LiveReload />
				<ScrollRestoration />
			</body>
			<footer className="border-t-2 border-blue mb-2">
				<p className="text-center pt-1 text-fg">Made with ❤️ by likalium, 2023-2024</p>
				<span className="flex justify-center"><a href="https://github.com/likalium/likalium.github.io"><GithubLogo className="text-cyan text-url hover:text-green ph-bold ph-github-logo text-4xl" /></a><a href="https://discord.gg/f3sSSudEhV"><DiscordLogo className="ph-bold ph-discord-logo text-cyan text-url hover:text-green text-4xl" /></a></span>
				<p className="text-center text-fg">Colorscheme: <a alt="Link to Tokyo Night, a color theme for neovim" href="https://github.com/folke/tokyonight.nvim" className="url">Tokyo Night</a> / Icons: <a alt="An icon font" href="https://phosphoricons.com/" className="url">Phosphor Icons</a> / CSS framework: <a href="https://tailwindcss.com/" alt="A link to the Tailwind CSS website, a CSS framework" className="url">Tailwind CSS</a> / Javascript framework: <a href="https://react.dev/" alt="Link to React javascript UI framework website" className="url">React</a> / Web framework: <a href="https://remix.run/" alt="Link to Remix-run web framework" className="url">Remix</a></p>
			</footer>
		</html>
	)
}
