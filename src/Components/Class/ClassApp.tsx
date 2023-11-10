import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../Data/FishData";
type ClassState = {
	incorrectCount: number;
	correctCount: number;
};

export class ClassApp extends Component<Record<string, never>, ClassState> {
	state: ClassState = {
		incorrectCount: 0,
		correctCount: 0,
	};

	render() {
		const { incorrectCount, correctCount } = this.state;
		const totalCount = incorrectCount + correctCount;
		const isGameOver = totalCount === initialFishes.length;
		const nextFish = initialFishes[totalCount];

		return (
			<>
				<>
					<ClassScoreBoard
						incorrectCount={incorrectCount}
						correctCount={correctCount}
					/>
					{!isGameOver && (
						<ClassGameBoard
							nextFish={nextFish}
							onGuess={(guess) => {
								guess === nextFish.name
									? this.setState({ correctCount: correctCount + 1 })
									: this.setState({ incorrectCount: incorrectCount + 1 });
							}}
						/>
					)}
				</>
				{isGameOver && (
					<ClassFinalScore
						correctCount={correctCount}
						totalCount={totalCount}
					/>
				)}
			</>
		);
	}
}
