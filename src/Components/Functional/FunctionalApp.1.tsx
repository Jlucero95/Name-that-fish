import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
	const [correctCount, setCorrectCount] = useState(0);
	const [incorrectCount, setIncorrectCount] = useState(0);
	return (
		<>
			<FunctionalScoreBoard
				incorrectCount={incorrectCount}
				correctCount={correctCount}
			/>
			<FunctionalGameBoard
				handleGuessCompare={({ guess, fishName }) => {
					if (guess === fishName) {
						setCorrectCount(correctCount + 1);
					} else {
						setIncorrectCount(incorrectCount + 1);
					}
				}}
			/>
			{false && <FunctionalFinalScore />}
		</>
	);
}
