import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard, initialFishes } from "./ClassGameBoard";
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
					{correctCount + incorrectCount < initialFishes.length && (
						<ClassGameBoard
							handleGuessCount={({ guess, fishName }) => {
								guess === fishName
									? this.setState({ correctCount: correctCount + 1 })
									: this.setState({ incorrectCount: incorrectCount + 1 });
							}}
						/>
					)}
				</>
				{correctCount + incorrectCount >= initialFishes.length && (
					<ClassFinalScore
						totals={{
							correctCount: correctCount,
							totalCount: correctCount + incorrectCount,
						}}
					/>
				)}
			</>
		);
	}
}
