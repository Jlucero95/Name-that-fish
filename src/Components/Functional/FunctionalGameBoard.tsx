import { useState } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

type FunctionalGameBoardProps = {
	onGuess: (guess: string) => void;
	nextFish: Fish;
};

export function FunctionalGameBoard({
	onGuess,
	nextFish,
}: FunctionalGameBoardProps) {
	const [guessInput, setGuessInput] = useState("");
	return (
		<div id="game-board">
			<div id="fish-container">
				<img
					src={nextFish.url}
					alt={nextFish.name}
				/>
			</div>

			<form
				id="fish-guess-form"
				onSubmit={(e) => {
					e.preventDefault();
					onGuess(guessInput);
					setGuessInput("");
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
