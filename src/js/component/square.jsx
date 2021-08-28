import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [pokemon, setPokemon] = useState("");

	const selectTurn = turn => {
		if (turn == true && pokemon == "") {
			setPokemon(
				<img
					className="img-fluid"
					src="https://i.ibb.co/mckL17Q/pokemon-03.png"
				/>
			);
		} else if (turn == false && pokemon == "") {
			setPokemon(
				<img
					className="img-fluid"
					src="https://i.ibb.co/f8MDdZs/bulbasaur-02.png"
				/>
			);
		}
		props.changeValue();
	};

	return (
		<div
			onClick={() => {
				selectTurn(props.turn);
				props.saveValue(props.turn, props.squarePosition);
			}}
			className="square">
			{pokemon}
		</div>
	);
};

export default Square;

Square.propTypes = {
	turn: PropTypes.bool,
	checkWinner: PropTypes.func,
	changeValue: PropTypes.func,
	squarePosition: PropTypes.number,
	saveValue: PropTypes.func
};
