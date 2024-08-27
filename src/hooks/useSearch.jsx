import { useDispatch } from "react-redux";
import axios from "../api";

const useSearch = ({ searchValue }) => {
	const dispatch = useDispatch();

	const handleSearchCity = async (e) => {
		e.preventDefault();

		if (!searchValue) return;

		try {
			const response = await axios.get(
				`forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${searchValue}&days=7&aqi=yes&alerts=yes`
			);
			const data = response.data;
			dispatch({ type: "SEARCH_DATA", data });
		} catch (error) {
			console.error("Error fetching weather data:", error);
		}
	};

	return { handleSearchCity };
};

export default useSearch;
