import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Info from "./components/info/Info";

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Info />
			</main>
		</>
	);
}

export default App;
