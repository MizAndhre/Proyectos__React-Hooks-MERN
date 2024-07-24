import React from "react";
import ReactDOM from "react-dom/client";

// import { App } from "./App";
// import { FirstApp } from "./FirstApp";

import "./styles.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.querySelector("#root")).render(
	<React.StrictMode>
		{/* <App />
		<FirstApp subtitulo={123} titulo='Titulo'/> */}
		<CounterApp value={50} />
	</React.StrictMode>
);
