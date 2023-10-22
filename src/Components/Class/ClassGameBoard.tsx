import "./styles/game-board.css";
import { Component } from "react";
import { Images } from "../../assets/Images";
import { TGuessCheck } from "../GuessType";
import { TGuessCount } from "./ClassApp";

const initialFishes = [
	{
		name: "trout",
		url: Images.trout,
	},
	{
		name: "salmon",
		url: Images.salmon,
	},
	{
		name: "tuna",
		url: Images.tuna,
	},
	{
		name: "shark",
		url: Images.shark,
	},
];

export class ClassGameBoard extends Component<{
	handleGuessCount: ({ incorrectCount, correctCount }: TGuessCount) => void;
}> {
	state: TGuessCheck = {
		guessInput: "",
		incorrect: 0,
		correct: 0,
	};
	render() {
		const { guessInput, incorrect, correct } = this.state;
		const { handleGuessCount } = this.props;

		const nextFishToName = initialFishes[0];
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
						guessInput === nextFishToName.name
							? this.setState({ correct: correct + 1 })
							: this.setState({ incorrect: incorrect + 1 });
						handleGuessCount({
							incorrectCount: incorrect,
							correctCount: correct,
						});
						this.setState({ guessInput: "" });
					}}
				>
					<label htmlFor="fish-guess">What kind of fish is this?</label>
					{guessInput}
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
