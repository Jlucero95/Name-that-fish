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
		const answersLeft = initialFishes
			.map((fish) => fish.name)
			.slice(totalCount);
		const nextFish = initialFishes[totalCount];
		const handleGuess = (guess: string) => {
			guess === nextFish.name
				? this.setState({ correctCount: correctCount + 1 })
				: this.setState({ incorrectCount: incorrectCount + 1 });
		};

		return (
			<>
				<>
					{!isGameOver && (
						<>
							<ClassScoreBoard
								incorrectCount={incorrectCount}
								correctCount={correctCount}
								answersLeft={answersLeft}
							/>
							<ClassGameBoard
								nextFish={nextFish}
								onGuess={handleGuess}
							/>
						</>
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
