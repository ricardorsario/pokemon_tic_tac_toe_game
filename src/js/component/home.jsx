import React, { useState, setState, Fragment } from "react";
import Square from "./square.jsx";

const Home = () => {
	const [turn, setTurn] = useState(true);
	const [player, setPlayer] = useState("Charmander, I choose you!");
	const [gridValue, setGridValue] = useState(Array(9).fill(null));

	const squareValue = (value, squarePosition) => {
		const squares = [...gridValue];

		squares[squarePosition] = value;
		setGridValue(squares);
		console.log(squares);

		let winner = whoWins(squares);

		if (winner === true) {
			setPlayer("CHARMANDER WINS!");
		} else if (winner === false) {
			setPlayer("BULBASAUR WINS!");
		} else if (winner === null) {
			setPlayer(
				"What will " + (turn ? "Bulbasaur do?" : "Charmander do?")
			);
		}
	};

	const changeTheValue = () => {
		setTurn(!turn);
	};

	let manySquares = [];

	for (let i = 0; i < 9; i++) {
		manySquares.push(
			<Square
				turn={turn}
				changeValue={changeTheValue}
				key={i.toString()}
				checkWinner={whoWins}
				squarePosition={i}
				saveValue={squareValue}
			/>
		);
	}

	const whoWins = squares => {
		const condition = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0; i < condition.length; i++) {
			const [a, b, c] = condition[i];
			if (
				squares[a] != null &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	return (
		<Fragment>
			<div className="pokedex container">
				<div className="title">TIC-TAC-POK</div>
				<div className="screen_border">
					<div className="screen">
						<div className="text">{player}</div>
						<div className="row">
							{manySquares[0]}
							{manySquares[1]}
							{manySquares[2]}
						</div>
						<div className="row">
							{manySquares[3]}
							{manySquares[4]}
							{manySquares[5]}
						</div>
						<div className="row">
							{manySquares[6]}
							{manySquares[7]}
							{manySquares[8]}
						</div>
					</div>
				</div>
				<div className="shapes_container">
					<div className="circle" />
					<button
						className="rectangle"
						onClick={() => {
							window.location.reload();
						}}>
						START
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
