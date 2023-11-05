import "./styles/game-board.css";
import { initialFishes } from "../FishData";
import { useState } from "react";

export type TFuncGuessCompare = (onGuess: {
	guess: string;
	fishName: string;
}) => void;

export function FunctionalGameBoard(onGuess: {
	handleGuessCompare: TFuncGuessCompare;
}) {
	const [guessInput, setGuessInput] = useState("");
	const [fishIndex, setFishIndex] = useState(0);
	const nextFishToName = initialFishes[fishIndex];
	return (
		<div id="game-board">
			<div id="fish-container">
				<img
					src={nextFishToName.url}
					alt={nextFishToName.name}
				/>
			</div>

			<form
				id="fish-guess-form"
				onSubmit={(e) => {
					e.preventDefault();
					onGuess.handleGuessCompare({
						guess: guessInput,
						fishName: nextFishToName.name,
					});
					setGuessInput("");
					setFishIndex(fishIndex + 1);
				}}
			>
				<label htmlFor="fish-guess">What kind of fish is this?</label>
				<input
					type="text"
					name="fish-guess"
					onChange={(e) => {
						setGuessInput(e.target.value);
					}}
					value={guessInput}
				/>
				<input type="submit" />
			</form>
		</div>
	);
}
