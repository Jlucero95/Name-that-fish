import "./styles/game-board.css";
import { Component } from "react";
import type { TGuessCheck } from "../AppTypes.ts/TGuessCheck";
import { initialFishes } from "../FishData";

export class ClassGameBoard extends Component<{
	handleGuessCount: ({
		guess,
		fishName,
	}: {
		guess: string;
		fishName: string;
	}) => void;
}> {
	state: TGuessCheck = {
		guessInput: "",
		fishIndex: 0,
	};

	render() {
		const { guessInput, fishIndex } = this.state;
		const { handleGuessCount } = this.props;

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
						handleGuessCount({
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
