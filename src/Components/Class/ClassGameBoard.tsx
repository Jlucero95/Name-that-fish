import "./styles/game-board.css";
import { Component, FormEvent } from "react";
import { Fish } from "../../types";

type ClassGameBoardProps = {
	onGuess: (guess: string) => void;
	nextFish: Fish;
};

type inputStateProps = { guessInput: string };

export class ClassGameBoard extends Component<ClassGameBoardProps> {
	state: inputStateProps = {
		guessInput: "",
	};

	render() {
		const { guessInput } = this.state;
		const { onGuess, nextFish } = this.props;

		const handleSubmit = (e: FormEvent) => {
			e.preventDefault();
			onGuess(guessInput);
			this.setState({
				guessInput: "",
			});
		};

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
					onSubmit={handleSubmit}
				>
					<label htmlFor="fish-guess">What kind of fish is this?</label>
					<input
						type="text"
						name="fish-guess"
						onChange={(e) => {
							this.setState({
								guessInput: e.target.value,
							});
						}}
						value={guessInput}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}
