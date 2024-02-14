import { useState } from "react";

import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";

// DATA IMPORTING
import { weatherData, newsData, thisDayData, iLikeData } from "./siteData.js";


// Weather widget
function Weather () {
	const [ selected, setSelected ] = useState(0);
	let prefix = "https://meteofrance.com/modules/custom/mf_tools_common_theme_public/svg/weather/"
	const weatherButtons = weatherData.map( weatherButton => { 
		return (
				<button
					key={weatherButton.id}
					className={ selected === weatherButton.id ? "transition ease-linear delay-0 duration-150 w-[144px] border-t-4 border-b-[4px] border-red1 p-3 bg-fg" : "transition ease-linear delay-0 duration-150 w-[144px] border-terminalBlack border-t-4 border-t-blue border-b-[4px] p-3 bg-fg" }
					onClick={() => setSelected(weatherButton.id)}>
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
		<div className="flex flex-row justify-center font-['Overpass']">
			<div className="bg-blue font-inter rounded-md">
				<div className=" flex pt-3 flex-row justify-center">
					<p className="p-2"><span className="text-blue0">Weather for: </span><span className="font-bold text-red1">Paris, France</span></p>
					<br />
				</div>
				<div className="flex flex-row justify-center pt-2">
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

export default function App() {
	const [ selected, setSelected ] = useState(0);
	const [switchSlide, setSwitchSlide] = useState(0)

	function Slides({data}) {
		return (
			data.map(d => {
				if (d.id === switchSlide ) {
					const infoList = d.list.map(l => { return <li>{l}</li>})

					return (
						<div className="flex flex-row place-items-center" key={d.id}>
							<div>
								<button
									className="transition ease-linear duration-100 delay-0 bg-black rounded-full p-2 border-2 border-bg hover:border-magenta hover:text-magenta"
									onClick={() => {
										if (switchSlide > 0) {
											setSwitchSlide(switchSlide-1);
										}
									}}>
									<ArrowLeft weight="bold"/>
								</button>
							</div>
							<div
								style={{ whiteSpace: 'pre-line'}}
								className="p-3 flex flex-row place-items-center justify-between"
								>
								<div className="shrink-0">
									<h2 className={"font-syne text-blue5 font-bold "+d.titleSize} >
										{d.title}
									</h2>
									<ol className="list-disc list-inside pl-6 pt-10 font-inter text-4xl">
										{infoList}
									</ol>
								</div>
								{d.images()}
							</div>
							<div>
								<button
									className="transition ease-linear duration-100 delay-0 bg-black rounded-full p-2 border-2 border-bg hover:border-magenta hover:text-magenta"
									onClick={() => {
										if (switchSlide < data.length-1) {
											setSwitchSlide(switchSlide + 1)
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
							<li key="weather">
								<span className="text-red bg-[#f7768e2f] p-1 border-2 rounded-md border-bg">
									The weather
								</span>
							</li>
							<li key="news">
								<span className="text-blue2 bg-[#0db9d72f] p-1 border-2 rounded-md border-bg">
									The news
								</span>
							</li>
							<li key="week">
								<span className="text-magenta bg-[#bb9af72f] p-1 border-2 rounded-md border-bg">
									It happened the same week
								</span>
							</li>
							<li key="like">
								<span className="text-green1 bg-[#73daca2f] p-1 border-2 rounded-md border-bg">
									Two things I like
								</span>
							</li>
							<li key="conclusion">
								<span
									className="text-teal bg-[#1abc9c2f] p-1 corder-2 rounded-md border-bg">
									Conclusion
								</span>
							</li>
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
			text: () => <Slides data={newsData} />
		},
		{
			id: 3,
			title: "It happened the same week",
			titleColor: "text-magenta",
			text: () => <Slides data={thisDayData} />
		},
		{
			id: 4,
			title: "Two things I like",
			titleColor: "text-green1",
			text: () => <Slides data={iLikeData} />
		},
		{
			id: 5,
			title: "Conclusion",
			titleColor: "text-teal",
			text: () => {
				return (
					<div>
						<div className="flex flex-col place-items-center pb-12 text-center space-y-3">
							<h2 className="font-syne font-bold text-red text-6xl pb-4">Thanks for listening !</h2>
							<h3 className="font-inter text-magenta text-3xl pb-2">I hope you enjoyed this presentation, because I litterally spent <span className="underline bg-[#9d7cd83d] border-2 p-1 rounded-md border-bg">hours</span> on it :)</h3>
							<h3 className="font-inter text-green text-3xl"><ArrowRight className="inline" weight="bold" /> Everything that you've seen so far was entirely coded <span className="italic">from scratch</span> by <span className="underline bg-[#9ece6a2f] border-2 p-1 rounded-md border-bg">me</span> and nobody else</h3>
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
		const TopBarButtons= steps.map(step => {
			return (
				<button
					key={step.id}
					className={selected === step.id ? "bg-black border-orange text-purple font-['Rajdhani'] border-2 rounded-2xl p-2" : "bg-bgDark text-dark5 border-bg font-['Rajdhani'] border-2 rounded-2xl p-2"}
					onClick={() => {
						setSelected(step.id);
						setSwitchSlide(0)
					}}
				>
					{step.id + 1}. {step.title}
				</button>
			)
		})
		return (
			<div className="flex flex-row space-x-2">
				{TopBarButtons}
			</div>
		)
	}

	function PrevButton() {
		return (
			<button
				className="transition ease-linear border-2 duration-300 border-red rounded-2xl hover:bg-red hover:text-bgDark p-2 font-['Rajdhani']"
				onClick={() => {
					if (selected > 0) {
						setSelected(selected - 1)
						setSwitchSlide(0)
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
				className="transition ease-linear delay-0 buration-300 border-2 border-green rounded-2xl hover:bg-green hover:text-bgDark p-2 font-['Rajdhani']"
				onClick={() => {
					if (selected < steps.length - 1) {
						setSelected(selected + 1);
						setSwitchSlide(0)
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
			<TopBar />
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
