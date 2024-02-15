// DATA (obviously)
// Weather
export const weatherData = [
	{
		id: 0,
		dayText: "Thursday",
		dayNum: 15,
		weatherIcon: "p4j",
		description: "Cloudy skies",
		minTemp: 10,
		maxTemp: 16,
		windIcon: "SSE",
		windSpeed: 15
	},
	{
		id: 1,
		dayText: "Friday",
		dayNum: 16,
		weatherIcon: "p2j",
		description: "Sunny spells",
		minTemp: 12,
		maxTemp: 14,
		windIcon: "O",
		windSpeed: 20
	},
	{
		id: 2,
		dayText: "Saturday",
		dayNum: 17,
		weatherIcon: "p2j",
		description: "Sunny spells",
		minTemp: 8,
		maxTemp: 13,
		windIcon: "O",
		windSpeed: 15
	},
	{
		id: 3,
		dayText: "Sunday",
		dayNum: 18,
		weatherIcon: "p14j",
		description: "Rain",
		minTemp: 10,
		maxTemp: 14,
		windIcon: "SSO",
		windSpeed: 20
	}
]

// News
export const newsData = [
	{
		id: 0,
		title: "Ukrainian army would have\nsunk a Russian ship",
		titleSize: "text-4xl",
		list: ["Wednesday, February 14","Not confirmed by the Russian army"],
		images: () => {
			return (
				<div className="p-3 flex flex-col space-y-2">
					<div className="flex flex-row space-x-2 justify-end">
						<img src="./assets/black_sea.jpg" width="50%" className="rounded-img" />
					</div>
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/ukrain_flag.svg" width="24%" className="rounded-img" />
						<img src="./assets/russia_flag.svg" width="24%" className="rounded-img" />
					</div>
					
				</div>
			)
		}
	},
	{
		id: 1,
		title: "Shooting in Missouri",
		titleSize: "text-4xl",
		list: ["Wednesday, February 14", "In Kansas City, in Missouri", "After a celebration parade"],
		images: () => <img src="./assets/shooting.jpg" width="30%" className="rounded-img" />
	}
]

// On this day
export const thisDayData = [
	{
		id: 0,
		title: "First draft of human genome\nis published",
		titleSize: "text-4xl",
		list: ["February 15, 2001", "Great progress for science", "Led by the Human Genome Project"],
		images: () => {
			return (
				<div className="p-3 flex flex-col space-y-2">
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/nature_genome_cover.jpg" width="25%" className="rounded-img"/>
						<img src="./assets/dna.jpg" width="25%" className="rounded-img"/>
					</div>
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/human_genome_project.jpg" width="20%" className="rounded-img"/>
						<img src="./assets/dna_artwork.jpg" width="30%" className="rounded-img"/>
					</div>
				</div>
			)
		}
	},
	{
		id: 1,
		title: "Albert Einstein warns against\nhydrogen bomb",
		titleSize: "text-4xl",
		list: ["Feberuary 12, 1950", "Hydrogen bomb was developed\nby the U.S.A."],
		images: () => {
			return (
				<div className="p-3 flex flex-col space-y-2">
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/einstein_body.jpg" width="22%" className="rounded-img" />
						<img src="./assets/einstein_head.jpg" width="22%" className="rounded-img" />
					</div>
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/nuclear_explosion.jpg" width="25%" className="rounded-img" />
						<img src="./assets/truman.jpg" width="19%" className="rounded-img" />
				</div>
				</div>
			)
		}
	}
]

// Things I like
export const iLikeData = [
	{
		id: 0,
		title: "Linux",
		titleSize: "text-8xl",
		list: [ "Created in 1991", "Free and open-source", "Written in C" ],
		images: () => {
			return (
				<div className="p-3 flex flex-col space-y-2">
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/Tux.svg" width="20%" />
						<img src="./assets/torvalds.jpg" width="20%" className="rounded-img" />
					</div>
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/archlinux.png" width="10%" />
						<img src="./assets/nixos.png" width="10%" />
						<img src="./assets/debian.png" width="8%" />
						<img src="./assets/voidlinux.png" width="12%" />
					</div>
				</div>
			)
		}
	},
	{
		id: 1,
		titleSize: "text-8xl",
		title: "MF Doom",
		list: ["Born in 1971 in London", "Real name: Daniel Dumile", "Pillar of hip-hop music", "Died in 2020 aged 49"],
		images: () => {
			return (
				<div className="p-3 flex flex-col space-y-2">
					<div className="flex flex-row justify-end space-x-6">
						<img src="./assets/mfdoom.jpg" width="20%" className="rounded-img" />
						<img src="./assets/mfdoomlarge.jpg" width="40%" className="rounded-img" />
					</div>
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/madvillainy.jpg" width="20%" className="rounded-img" />
						<img src="./assets/mmfood.jpg" width="20%" className="rounded-img" />
						<img src="./assets/vaudevillevillain.jpg" width="20%" className="rounded-img" />
					</div>
				</div>
			)
		}
	}
]
