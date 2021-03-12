import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SettingContextProvider, {
	SettingContext,
} from "./context/SettingsContext";

ReactDOM.render(
	<SettingContextProvider>
		<App />
	</SettingContextProvider>,
	document.getElementById("root")
);
