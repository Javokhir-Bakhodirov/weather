const initialState = {
	theme: localStorage.getItem("current-theme") || "light",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SEARCH_DATA":
			return {
				searchData: action.data,
			};
		case "CHANGE_THEME":
			localStorage.setItem("current-theme", action.theme);
			return {
				...state,
				theme: action.theme,
			};
		default:
			return state;
	}
};
