import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../Data/FishData";

export function FunctionalApp() {
	const [correctCount, setCorrectCount] = useState(0);
	const [incorrectCount, setIncorrectCount] = useState(0);
	const totalCount = correctCount + incorrectCount;
	const nextFish = initialFishes[totalCount];
	const isGameOver = totalCount === initialFishes.length;

	return (
		<>
			<FunctionalScoreBoard
				incorrectCount={incorrectCount}
				correctCount={correctCount}
			/>
			{!isGameOver && (
				<FunctionalGameBoard
					nextFish={nextFish}
					onGuess={(guess) => {
						guess === nextFish.name
							? setCorrectCount(correctCount + 1)
							: setIncorrectCount(incorrectCount + 1);
					}}
				/>
			)}
			{isGameOver && (
				<FunctionalFinalScore
					correctCount={correctCount}
					totalCount={totalCount}
				/>
			)}
		</>
	);
}
