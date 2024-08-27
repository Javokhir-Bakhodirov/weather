import "./Banner.css";
import { useSelector } from "react-redux";
import Container from "../../utils";

const Banner = () => {
	const data = useSelector((state) => state.searchData);
	console.log(data);

	return (
		<section className="site-banner text-white">
			<Container>
				<div className="banner w-full h-[400px]  rounded-[20px] shadow-2xl shadow-indigo-600 overflow-hidden">
					<div className="bg-linear-color w-full h-full flex flex-col justify-end ">
						{data && (
							<div className="banner__liner flex items-end justify-between p-7">
								<div className="banner__left space-y-2">
									<img src={data.current.condition.icon} alt="" />
									<p className="font-bold text-6xl">{data.current.temp_c}°C</p>

									<p className="text-xl ">
										{data.location.name}, {data.location.country}
									</p>
								</div>
								<div className="banner__right text-xl font-bold">
									{data.current.last_updated.split(" ")[1]} PM
								</div>
							</div>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Banner;
