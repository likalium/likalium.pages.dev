export default function App() {
	return (
		<>
			<div id="home">
				<div className="border-custom mb-6">
					<h1 className="title pt-3 text-red">Hello!</h1>
					<p className="pt-3">Welcome on <a href="https://github.com/likalium/" className="url" alt="The website of likalium(me)">likalium</a>'s website! You'll find here stuff I made, stuff I want to make, and stuff I'm currently doing. Also this website is a WIP, so don't expect a big and perfect website. Have fun discovering it!</p>
				</div>
			</div>
			<div id="projects">
				<div className="border-custom mb-2">
					<h1 className="title text-orange pt-3">Stuff I made</h1>
					<div className="txt-img-align pb-6">
						<span className="self-center">
							<h2 className="title pt-3 text-purple">Hyprland: Frozen config</h2>
							<p className="pt-3 max-w-md">This is a small configuration for the wayland compositor <a href="https://hyprland.org/" alt="Hyprland's website" className="url">Hyprland</a>,  using the <a href="https://www.nordtheme.com/" alt="Nord color palette website" className="url">Nord</a> color palette. It was made to use practically all the functionnalities offered by the compositor, to be usable by everyone, while keeping a beautiful and functionnal design.</p>
							<br />
							<p>Find the dotfiles on <a href="https://github.com/likalium/dots/tree/main/hypr" alt="Link to the github repository where are stored likalium's dotfiles" className="url">their GitHub repository</a>.</p>
						</span>
						<img alt="A screenshot of likalium's computer, who shows how the Hyprland configuration he made render windows" src="./assets/hyprland_igloo.jpg" className="shrink rounded-md w-1/2 h-1/2" />
					</div>
					<div className="txt-img-align pb-6">
						<img alt="A screenshot of likalium's computer, who shows how looks Rofi with his theme" src="./assets/rofi.jpg" className="shrink rounded-md w-1/2 h-1/2" />
						<span className="self-center">
							<h2 className="title pt-3 text-purple">Rofi but Ice</h2>
							<p className="pt-3 max-w-md">A theme for the <a alt="A fork of Rofi for wayland, by lbonn" href="https://github.com/lbonn/rofi">Rofi wayland fork</a> using the <a className="url" href="https://www.nordtheme.com/">Nord</a> color palette. In fact it's not totally finished (I must do some minor tweaks to make it perfect), but it's still totally functionnal.</p>
							<br />
							<p>Find the dotfiles on <a href="https://github.com/likalium/dots/tree/main/rofi" alt="Link to the github repository where are stored likalium's dotfiles" className="url">their GitHub repository</a>.</p>
						</span>
					</div>
					<div className="txt-img-align">
						<span className='self-center'>
							<h2 className="title pt-3 text-purple">Neovim config</h2>
							<p className='pt-3 max-w-md'>A configuration for Neovim, which uses plugins (a lot of plugins) to makes <a href="https://neovim.io/" className="url" alt="Website of the Neovim text editor">Neovim</a> even more awesome. Since it's what i use daily for coding, i really want this to be powerful.</p>
							<br />
							<p>Find the dotfiles on <a href ="https://github.com/likalium/dots/tree/main/nvim" className='url' alt="Link to likalium's neovim config">their github repository</a>.</p>
						</span>
						<img src='./assets/nvim.png' alt="Screenshot of likalium's computer, showing a configured Neovim" className ="shrink rounded-md w-1/2 h-1/2" />
					</div>
				</div>
			</div>
			<div className="border-custom mb-2">
				<h1 className="title text-orange">Stuff I'm currently working on</h1>
				<div className="txt-img-align">
					<span className="self-center">
						<h2 className="title pt-3 text-purple">Eww bar &amp; widgets</h2>
						<p className="pt-3 max-w-md">A top bar and some widgets for my computer made with <a alt="The website of Eww, a tool for creating desktop widgets" href="https://elkowar.github.io/eww/" className="url">Eww widgets</a>. It's not finished.</p>
						<br/>
						<p>Find the dotfiles on <a href="https://github.com/likalium/dots/tree/main/eww" className='url' alt="Link to source code of the eww config">their their GitHub repository</a>.</p>
					</span>
					<img src="./assets/eww.png" alt="Screenshot of likalium computer, showing a topbar made with eww." className="shrink rounded-md w-1/2 h-1/2" />
				</div>
			</div>
			<div className="border-custom mb-6">
				<h1 className="title text-orange">Stuff i want to do</h1>
				<ul className="list-inside list-disc" role="list">
					<li>Learning C</li>
					<li>Learning C++</li>
					<li>A Mpd + Ncmpcpp config</li>
					<li>A Rofi config with <a href="https://github.com/folke/tokyonight.nvim" className="url" alt="A link to the nvim tokyonight colorscheme, by folke">Tokyonight</a> colorscheme</li>
				</ul>
			</div>
			<div id="about">
				<div className="border-custom mb-3">
					<h1 className="title text-red">About me</h1>
					<p>I'm a french high-school sudent, passionated by IT and open-source software (and also <a href="https://www.reddit.com/r/unixporn/" alt="A link to the SFW subreddit called unixporn, where people can post screenshots of desktops they tweaked to make them looks beautiful" className="url">Ricing</a>!). I daily drive <a href="https://archlinux.org/" alt="The website of Arch Linux, a Linux distribution" className="url">Arch Linux</a> (btw!), and I code with <a href="https://neovim.io/" alt=" A powerful text-editor who runs in the terminal" className="url">Neovim</a>. I'm interested in pretty all programming langages, since every of them has it's own powers. I also love reading books and listening music, I'm currently a huge fan of EDM. By the way, I made a <a alt="A playlist made by likalium with a lot of EDm songs from various artists" className="url" href="https://youtube.com/playlist?list=PLFJfAkW-pLyJZrTmAKRHrmqA4L0AimWT4">youtube playlist</a> if you want to check it out (yeah I'm doing my publicity lmao) (in fact check it I update it regularly with new songs).</p>
				</div>
			</div>
		</>
	)
}
