import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../FishData";

export function FunctionalApp() {
	const [correctCount, setCorrectCount] = useState(0);
	const [incorrectCount, setIncorrectCount] = useState(0);
	const totalCount = correctCount + incorrectCount;
	return (
		<>
			<FunctionalScoreBoard
				incorrectCount={incorrectCount}
				correctCount={correctCount}
			/>
			{totalCount < initialFishes.length && (
				<FunctionalGameBoard
					handleGuessCompare={({ guess, fishName }) => {
						guess === fishName
							? setCorrectCount(correctCount + 1)
							: setIncorrectCount(incorrectCount + 1);
					}}
				/>
			)}
			{totalCount >= initialFishes.length && (
				<FunctionalFinalScore
					totals={{
						correctCount: correctCount,
						totalCount: totalCount,
					}}
				/>
			)}
		</>
	);
}
