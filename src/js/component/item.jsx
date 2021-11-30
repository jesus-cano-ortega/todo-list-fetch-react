import React from "react";
import PropTypes from "prop-types";

const Item = props => {
	return (
		<>
			<div className="container d-flex flex-row align-items-center pt-4 justify-content-between">
				<li className="text-white">{props.name}</li>
				<button className="btn btn-outline-light" onClick={props.click}>
					X
				</button>
			</div>
		</>
	);
};

Item.propTypes = {
	name: PropTypes.string,
	click: PropTypes.any
};

export default Item;
