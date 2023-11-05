import "./styles/score-board.css";
import type { TGuessCount } from "../AppTypes.ts/TGuessCount.ts";
import { initialAnswersLeft } from "../Data/AnswersLeftData.ts";

export function FunctionalScoreBoard(counts: TGuessCount) {
	const { incorrectCount, correctCount } = counts;
	const totalCount = incorrectCount + correctCount;
	const answersLeft = initialAnswersLeft.slice(totalCount);
	return (
		<div id="score-board">
			<div>Incorrect 🔻: {incorrectCount}</div>
			<div id="choices-left">
				{answersLeft.map((answer) => (
					<div
						key={answer}
						className="choice"
					>
						{answer}
					</div>
				))}
			</div>
			<div>Correct ✅: {correctCount}</div>
		</div>
	);
}
