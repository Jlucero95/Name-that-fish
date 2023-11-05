import { useState } from "react";
import "./styles/game-board.css";
import { initialFishes } from "../Data/FishData";
import type { TGuessCompare } from "../AppTypes.ts/TGuessCompare";

export function FunctionalGameBoard(onGuess: {
	handleGuessCompare: TGuessCompare;
}) {
	const [guessInput, setGuessInput] = useState("");
	const [fishIndex, setFishIndex] = useState(0);
	const nextFishToName = initialFishes[fishIndex];
	const fishName = nextFishToName.name;
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
						fishName: fishName,
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
