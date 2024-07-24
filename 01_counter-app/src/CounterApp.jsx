//
import { useState } from "react";

import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
	const [numero, setNumero] = useState(value);

	const handleAgregar = () => {
		// setNumero(numero + 1);
		setNumero((n) => n + 10);
	};

	const handleDisminuir = () => setNumero(numero - 5);

	const handleReset = () => {
		setNumero(value);
	};

	return (
		<>
			<main>
				<div className='container'>
					<h1>CounterApp</h1>

					<h2>{numero}</h2>

					<button onClick={handleAgregar}>+1</button>

					<button onClick={handleDisminuir}>-1</button>

					<button onClick={handleReset}> Reset</button>
				</div>
			</main>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
