import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export type TGuessCount = {
	incorrectCount: number;
	correctCount: number;
};

export class ClassApp extends Component<TGuessCount> {
	state: TGuessCount = {
		incorrectCount: 0,
		correctCount: 0,
	};
	render() {
		const { incorrectCount, correctCount } = this.state;
		return (
			<>
				<>
					<ClassScoreBoard
						countNumbers={{
							incorrectCount: incorrectCount,
							correctCount: correctCount,
						}}
					/>
					<ClassGameBoard
						handleGuessCount={({ guess, fishName }) => {
							if (guess === fishName) {
								this.setState({ correctCount: correctCount + 1 });
							} else {
								this.setState({ incorrectCount: incorrectCount + 1 });
							}
						}}
					/>
				</>
				{false && <ClassFinalScore />}
			</>
		);
	}
}
