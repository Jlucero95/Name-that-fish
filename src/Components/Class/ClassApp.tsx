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
		return (
			<>
				<>
					<ClassScoreBoard
						countNumbers={{
							incorrectCount: this.state.incorrectCount,
							correctCount: this.state.correctCount,
						}}
					/>
					<ClassGameBoard
						handleGuessCount={({ incorrectCount, correctCount }) => {
							this.setState({
								incorrectCount: incorrectCount,
								correctCount: correctCount,
							});
						}}
					/>
				</>
				{false && <ClassFinalScore />}
			</>
		);
	}
}
