import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from "./chart-components/bar-chart";

function App() {

	function fn(d) {
		console.log('Finished...', d);
	}
	const res = fetch('https://api.freemius.com/v1/ping.json');
	res.then(fn);

	return (
		<div className="App">
			<BarChart />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> aknd save to reload.
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header>
		</div>
	);
}

export default App;