import { useState } from "react"

import { ArrowRight, ArrowLeft } from "@phosphor-icons/react"

// DATA
// Weather
const weatherData = [
	{
		id: 0,
		dayText: "Monday",
		dayNum: 22,
		weatherIcon: "p3j",
		description: "Cloudy",
		minTemp: 8,
		maxTemp: 12,
		windIcon: "SO",
		windSpeed: 40
	},
	{
		id: 1,
		dayText: "Tuesday",
		dayNum: 23,
		weatherIcon: "p13j",
		description: "Rainy",
		minTemp: 10,
		maxTemp: 13,
		windIcon: "SO",
		windSpeed: 40
	},
	{
		id: 2,
		dayText: "Wenesday",
		dayNum: 24,
		weatherIcon: "p12j",
		description: "Light showers",
		minTemp: 10,
		maxTemp: 13,
		windIcon: "OSO",
		windSpeed: 30
	},
	{
		id: 3,
		dayText: "Thursday",
		dayNum: 25,
		weatherIcon: "p3j",
		description: "Cloudy",
		minTemp: 7,
		maxTemp: 12,
		windIcon: "SSO",
		windSpeed: 30
	},
	{
		id: 4,
		dayText: "Friday",
		dayNum: 26,
		weatherIcon: "p3j",
		description: "Cloudy",
		minTemp: 6,
		maxTemp: 10,
		windIcon: "SO",
		windSpeed: 15
	},
	{
		id: 5,
		dayText: "Saturday",
		dayNum: 27,
		weatherIcon: "p3j",
		description: "Cloudy",
		minTemp: 4,
		maxTemp: 8,
		windIcon: "N",
		windSpeed: 20
	},
	{
		id: 6,
		dayText: "Sunday",
		dayNum: 28,
		weatherIcon: "p3j",
		description: "Cloudy",
		minTemp: 2,
		maxTemp: 6,
		windIcon: "NNE",
		windSpeed: 20
	}
]

// Useful classes
const imgClass = "border-2 rounded-[5%] border-bg" // rounded corners for images

function Weather () {
	const [ selected, setSelected ] = useState(0);
	let prefix = "https://meteofrance.com/modules/custom/mf_tools_common_theme_public/svg/weather/"
	const weatherButtons = weatherData.map( weatherButton => { 
		return (
				<button
					key={weatherButton.id}
					className={ selected === weatherButton.id ? "transition ease-linear delay-0 duration-150 w-[144px] border-t-4 border-b-[4px] border-red1 p-3 bg-fg" : "transition ease-linear delay-0 duration-150 w-[144px] border-terminalBlack border-t-4 border-t-blue border-b-[4px] p-3 bg-fg" }
					onClick={() => setSelected(weatherButton.id)} >
					<div className="text-blue0 font-bold">{weatherButton.dayText} {weatherButton.dayNum}</div>
					<div><img src={prefix + weatherButton.weatherIcon + ".svg"} className="inline" /></div>
					<span className="font-bold">  t
						<span className="text-blue0">{weatherButton.minTemp}° /</span> <span className="text-red1">{weatherButton.maxTemp}°</span>
					</span>
					<div className="text-blue0 text-sm">
						<img src={prefix + weatherButton.windIcon + ".svg" } className="inline w-[15px]" />
						<span className="font-bold">{weatherButton.windSpeed}</span> km/h
					</div>
				</button>
		)
	})
	return (
		<div className="flex flex-row justify-center">
			<div className="bg-blue font-inter">
				<div className=" flex pt-3 flex-row justify-center">
					<p className="p-2"><span className="text-blue0">Weather for: </span><span className="font-bold text-red1">Paris, France</span></p>
					<br />
				</div>
				<div className="transition ease-linear delay-0 duration-300 flex flex-row justify-center pt-2">
					<img height={150} width={150} src={prefix + weatherData[selected].weatherIcon + ".svg"} />
				</div>
				<div className="flex flex-row justify-center pb-3">
					<p className="text-2xl text-blue7">{weatherData[selected].description}</p>
				</div>
				{weatherButtons}
			</div>
		</div>
	)
}
// On this day
const thisDayData = [
	{
		id: 0,
		title: "Newton solves Bernoulli's problem",
		subtitle: "British mathematician and physicist Isaac Newton solves in a day a problem he had six months to find a solution",
		desc: "On January 26, 1697, Newton receives a mathematics problem from Swiss mathematician Jean Bernoulli. The challenge was to find a solution within six months. But Newton found the solution... the day he received the problem, just before going to bed.",
	image: "./assets/newton.jpg",
		height: "50%",
		width: "50%"
	},
	{
		id: 1,
		title: "Spirit Rover begins Mars mission",
		subtitle: "Twenty years ago, rover Spirit landed on Mars",
		desc: "Launched June 10, 2003 by the NASA, the rover Spirit landed on Mars Janury 25, 2004. It took awesome pictures of Mars; in the highest quality at the time. It was supposed to last three months, but he was declared unoperational more than six years after landing, May 25, 2011.",
		image: "./assets/spirit.jpg",
		height: "50%",
		width: "50%"
	}
]

// Things I like
const iLikeData = [
	{
		id: 0,
		title: "Linux",
		list: [ "Created in 1991", "Free and open-source", "Written in C" ],
		images: () => {
			return (
				<div className="p-3 flex flex-col space-y-2">
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/Tux.svg" width="20%" />
						<img src="./assets/torvalds.jpg" width="20%" className={imgClass}/>
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
		title: "MF Doom",
		list: ["Born in 1971 in London", "Real name: Daniel Dumile", "Pillar of hip-hop music", "Died in 2020 aged 49"],
		images: () => {
			return (
				<div className="p-3 flex flex-col space-y-2">
					<div className="flex flex-row justify-end space-x-6">
						<img src="./assets/mfdoom.jpg" width="20%" className={imgClass} />
						<img src="./assets/mfdoomlarge.jpg" width="40%" className={imgClass} />
					</div>
					<div className="flex flex-row space-x-3 justify-end">
						<img src="./assets/madvillainy.png" width="20%" className={imgClass} />
						<img src="./assets/mmfood.jpg" width="20%" className={imgClass} />
						<img src="./assets/vaudevillevillain.jpg" width="20%" className={imgClass} />
					</div>
				</div>
			)
		}
	}
]

export default function App() {
	const [ selected, setSelected ] = useState(0);
	const [ thisDay, setThisDay ] = useState(0);
	const [ iLike, setILike ] = useState(0);

	const liHover="transition ease-in-out delay-150"
	function ThisDaySlides() {
		return (
			thisDayData.map(d => {
				if (d.id === thisDay) {
					return (
						<div className=" flex flex-row place-items-center" key={d.id}>
							<div>
								<button
									className="transition ease-linear duration-100 delay-0 bg-black rounded-full p-2 border-2 border-bg hover:border-magenta hover:text-magenta"
									onClick={() => {
										if (thisDay > 0) {
											setThisDay(thisDay -1);
										}
									}}>
									<ArrowLeft weight="bold"/>
								</button>
							</div>
							<div className="transition-opacity ease-linear duration-500 p-3 txt-img-align">
								<div className="flex flex-col space-y-4 justify-between">
									<div>
										<h2 className="font-syne font-bold text-blue5 text-4xl">{d.title}</h2>
										<h3 className="font-['Rajdhani'] text-fg text-2xl">{d.subtitle}</h3>
									</div>
									<p className="text-green1 pb-3">{d.desc}</p>
								</div>
								<img className={imgClass} src={d.image} height={d.height} width={d.width} />
							</div>
							<div>
								<button
									className="transition ease-linear duration-100 delay-0 bg-black rounded-full p-2 border-2 border-bg hover:border-magenta hover:text-magenta"
									onClick={() => {
										if (thisDay < thisDayData.length-1) {
											setThisDay(thisDay + 1)
										}
									}}>
									<ArrowRight weight="bold"/>
								</button>
							</div>
						</div>
					)
				}
			})
		)
	};
	function ILikeSlides() {
		return (
			iLikeData.map(ild => {
				if (ild.id === iLike ) {
					const iLikeList = ild.list.map(l => { return <li>{l}</li>})

					return (
						<div className="flex flex-row place-items-center" key={ild.id}>
							<div>
								<button
									className="transition ease-linear duration-100 delay-0 bg-black rounded-full p-2 border-2 border-bg hover:border-magenta hover:text-magenta"
									onClick={() => {
										if (iLike > 0) {
											setILike(iLike -1);
										}
									}}>
									<ArrowLeft weight="bold"/>
								</button>
							</div>
							<div className="p-3 flex flex-row place-items-center justify-between">
								<div className="shrink-0">
									<h2 className="font-syne text-blue5 text-8xl font-bold">{ild.title}</h2>
									<ol className="list-disc list-inside pl-6 pt-10 font-inter text-4xl">
										{iLikeList}
									</ol>
								</div>
								{ild.images()}
							</div>
							<div>
								<button
									className="transition ease-linear duration-100 delay-0 bg-black rounded-full p-2 border-2 border-bg hover:border-magenta hover:text-magenta"
									onClick={() => {
										if (iLike < iLikeData.length-1) {
											setILike(iLike + 1)
										}
									}}>
									<ArrowRight weight="bold"/>
								</button>
							</div>
						</div>
					)
				}
			})
		)
	}
	const steps = [
		{
			id: 0,
			title: "Summary",
			titleColor: "text-yellow",
			text: function () {
				return (
					<div className="p-2">
						<ol className="space-y-4 text-3xl list-decimal list-inside pl-6 font-syne text-terminalBlack">
							<li key="weather"><span className="text-red bg-[#f7768e2f] p-1 border-2 rounded-md border-bg">The weather</span></li>
							<li key="news"><span className="text-blue2 bg-[#0db9d72f] p-1 border-2 rounded-md border-bg">The news</span></li>
							<li key="week"><span className="text-magenta bg-[#bb9af72f] p-1 border-2 rounded-md border-bg">It happened the same week</span></li>
							<li key="like"><span className="text-green1 bg-[#73daca2f] p-1 border-2 rounded-md border-bg">Two things I like</span></li>
							<li key="conclusion"><span className="text-teal bg-[#1abc9c2f] p-1 corder-2 rounded-md border-bg">Conclusion</span></li>
						</ol>
					</div>
				)
			}
		},
		{
			id: 1,
			title: "The weather",
			titleColor: "text-red",
			text: () => <Weather />
		},
		{
			id: 2,
			title: "The news",
			titleColor: "text-blue1",
			text: () => {
				return <p>placeholder</p>
			}
		},
		{
			id: 3,
			title: "It happened the same week",
			titleColor: "text-magenta",
			text: () => {
				return (
					<div>
						<ThisDaySlides />
					</div>
				)
			}
		},
		{
			id: 4,
			title: "Two things I like",
			titleColor: "text-green1",
			text: () => {
				return (
				<div>
						<ILikeSlides />
					</div>
				)
			}
		},
		{
			id: 5,
			title: "Conclusion",
			titleColor: "text-teal",
			text: () => {
				return (
					<div>
						<div className="flex flex-col place-items-center pb-12">
							<h2 className="font-syne font-bold text-red text-6xl pb-4">Thanks for listening !</h2>
							<h3 className="font-inter text-magenta text-3xl pb-2">I hope you enjoyed this presentation, because I litterally spent <span className="underline bg-[#9d7cd83d] border-2 p-1 rounded-md border-bg">hours</span> on it :)</h3>
							<h3 className="font-inter text-green text-3xl"><ArrowRight className="inline" weight="bold" /> Everything that you've seen so far was entirely coded by <span className="underline bg-[#9ece6a2f] border-2 p-1 rounded-md border-bg">me</span> and nobody else</h3>
						</div>
						<p className="font-syne text-3xl pb-2">I used:</p>
						<ol className="list-disc list-inside pl-4 text-2xl space-y-3">
							<li><img src="./assets/react.svg" className=" p-1 inline bg-black border-2 rounded-lg border-bg" width="4%"/> React javascript framework</li>
							<li><img src="./assets/remixlogo.svg" className="p-1 inline bg-black border-2 rounded-lg border-bg" width="4%" /> Remix web framework</li>
							<li><img src="./assets/tailwind.svg" className="p-1 py-3 inline bg-black border-2 rounded-lg border-bg" width="4%" /> Tailwind CSS framework</li>
						</ol>
					</div>
					)
			}
		}
	]
	function TopBar() {
		return (
			steps.map(step => {
				return (
					<div key={step.id} className={selected === step.id ?
						"transition-colors duration-200 ease-linear delay-0 font-['Rajdhani'] bg-black border-2 border-orange rounded-2xl p-2 text-purple"
						: "transition-colors duration-200 ease-linear delay-0 bg-bgDark font-['Rajdhani'] border-2 border-bg rounded-2xl p-2 text-dark5"}>
						{step.id + 1}. {step.title}
					</div>
				)
			})
		)
	}

	function PrevButton() {
		return (
			<button
				className="transition linear border-2 duration-300 border-red rounded-2xl hover:bg-red hover:text-bgDark p-2 font-['Rajdhani']"
				onClick={() => {
				if (selected > 0) {
					setSelected(selected - 1)
				}
				}}>
				<span className="flex flex-row justify-center space-x-2">
					<div className="flex flex-col justify-center"><ArrowLeft weight="bold" /></div>
					Previous
				</span>
			</button>
		)
	}

	function NextButton() {
		return (
			<button
				className="transition linear delay-0 buration-300 border-2 border-green rounded-2xl hover:bg-green hover:text-bgDark p-2 font-['Rajdhani']"
				onClick={() => {
				if (selected < steps.length - 1) {
					setSelected(selected + 1)
				}
				}}>
				<span className="flex flex-row justify-center space-x-2">
					Next
					<div className="flex flex-col justify-center"><ArrowRight weight="bold" /></div>
				</span>
			</button>
		)
	}

	return (
		<div>
			<div className=" pb-3 flex flex-row place-content-between">
				<div className="flex flex-row space-x-2">
					<TopBar />
				</div>
				<div className="flex flex-row space-x-2">
					<PrevButton />
					<NextButton />
				</div>
			</div>
			<div className="border-terminalBlack shadow-xl rounded-md border-2 p-3 mb-6">
				<h1 className={"title pt-3 " + steps[selected].titleColor}>{steps[selected].title}</h1>
				<br />
				{steps[selected].text()}
			</div>
		</div>
	)
}
