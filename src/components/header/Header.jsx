import { BsFillMoonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import Container from "../../utils";
import { BsSunFill } from "react-icons/bs";
import "./Header.css";
import useSearch from "../../hooks/useSearch";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => {
	const [theme, setTheme] = useState("light");
	const [searchValue, setSearchValue] = useState("");

	const { handleSearchCity } = useSearch({ searchValue });
	const dispatch = useDispatch();
	const data = useSelector((state) => state.theme);

	const handleChangeTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		dispatch({
			type: "CHANGE_THEME",
			theme: newTheme,
		});
	};

	return (
		<header className="site-header">
			<Container>
				<div className="header flex items-center justify-between">
					<div className="header__logo-wrapper">
						<p className="header__logo text-indigo-700 text-2xl font-bold ">
							Weather App
						</p>
					</div>

					<form
						className="border max-w-[600px] flex-1 flex border-gray-300 px-4 py-[5px] rounded-[30px]"
						onSubmit={handleSearchCity}
					>
						<input
							type="text"
							placeholder="Enter city"
							className="flex-1 border-none outline-none text-lg"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						<button type="submit">
							{" "}
							<BsSearch />
						</button>
					</form>
					<div className="header__theme-toggle border border-gray-300 rounded-[30px] flex relative items-center">
						<input
							id="theme-toggle"
							type="checkbox"
							className="appearance-none w-[60px] h-[25px]"
							onChange={handleChangeTheme}
						/>
						<label
							htmlFor="theme-toggle"
							className="w-[32px] h-[32px] bg-indigo-500 text-white rounded-full flex items-center justify-center cursor-pointer absolute left-0 transition-all"
						>
							{theme === "light" ? <BsSunFill /> : <BsFillMoonFill />}
						</label>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
