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
	const answersLeft = initialFishes.map((fish) => fish.name).slice(totalCount);
	const handleGuess = (guess: string) => {
		guess === nextFish.name
			? setCorrectCount(correctCount + 1)
			: setIncorrectCount(incorrectCount + 1);
	};
	return (
		<>
			{!isGameOver && (
				<>
					<FunctionalScoreBoard
						incorrectCount={incorrectCount}
						correctCount={correctCount}
						answersLeft={answersLeft}
					/>
					<FunctionalGameBoard
						nextFish={nextFish}
						onGuess={handleGuess}
					/>
				</>
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
