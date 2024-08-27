import { BsThermometerSun } from "react-icons/bs";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import React from "react";
import Container from "../../utils";
import { useSelector } from "react-redux";
import "./Info.css";

const Info = () => {
	const data = useSelector((state) => state.searchData);
	return (
		<section className="info-section pt-[100px]">
			<Container>
				{data && (
					<ul className="info__list grid grid-cols-2 grid-flow-row-2 gap-8  info__card border-[1px] border-indigo-600 rounded-[20px]  w-[33%]  p-[20px] shadow-xl shadow-indigo-600">
						<li className="flex items-center space-x-4 ">
							<WiHumidity className=" info__icon w-[60px] h-[60px] text-indigo-600" />
							<div className=" text-indigo-500">
								<p className=" text-lg fond-bold">Humidity</p>
								<p className="">{data.current.humidity}%</p>
							</div>
						</li>
						<li className="flex items-center space-x-4">
							<FiSunset className="info__icon" />
							<div className="text-indigo-500">
								<p className="text-lg fond-bold">Sunset</p>
								<p className="">{data.forecast.forecastday[0].astro.sunset}</p>
							</div>
						</li>
						<li className="flex items-center space-x-4">
							<FiSunrise className="info__icon" />
							<div className="text-indigo-500">
								<p className="text-lg fond-bold">Sunrise</p>
								<p className="">{data.forecast.forecastday[0].astro.sunrise}</p>
							</div>
						</li>
						<li className="flex items-center space-x-4">
							<BsThermometerSun className="info__icon" />
							<div className="text-indigo-500">
								<p className="text-lg fond-bold">UV index</p>
								<p className="">{data.current.uv} of 10</p>
							</div>
						</li>
					</ul>
				)}
			</Container>
		</section>
	);
};

export default Info;
