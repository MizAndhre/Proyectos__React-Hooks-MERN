// export const FirstApp = (props) => {

import PropTypes from "prop-types";

export const FirstApp = ({ titulo, subtitulo, nueva }) => {
	return (
		<>
			<h2>{titulo}</h2>
			<p>{subtitulo}</p>
			<p>{nueva}</p>
		</>
	);
};

FirstApp.propTypes = {
	titulo: PropTypes.string.isRequired,
	subtitulo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
	titulo: "No hay título",
	subtitulo: "No hay números",
	nueva: "Nueva, sin nada",
};
