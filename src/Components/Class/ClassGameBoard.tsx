import "./styles/game-board.css";
import { Component } from "react";
import { initialFishes } from "../FishData";
import { TGuessCompare } from "../AppTypes.ts/TGuessCompare";

export class ClassGameBoard extends Component<{
	handleGuessCompare: TGuessCompare;
}> {
	state = {
		guessInput: "",
		fishIndex: 0,
	};

	render() {
		const { guessInput, fishIndex } = this.state;
		const { handleGuessCompare } = this.props;

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
						handleGuessCompare({
							guess: guessInput,
							fishName: nextFishToName.name,
						});
						this.setState({
							guessInput: "",
							fishIndex:
								fishIndex <= initialFishes.length
									? fishIndex + 1
									: initialFishes.length,
						});
					}}
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
