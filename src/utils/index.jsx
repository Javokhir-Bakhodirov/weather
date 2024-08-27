import React from "react";

function Container({ children }) {
	return (
		<div className="container max-w-[1250px] mx-auto p-4 w-full ">
			{children}
		</div>
	);
}

export default Container;
