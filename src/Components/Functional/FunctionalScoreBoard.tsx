import "./styles/score-board.css";
import { initialAnswersLeft } from "../AnswersLeftData.ts";
import { TGuessCount } from "../AppTypes.ts/TGuessCount.ts";

export function FunctionalScoreBoard(count: TGuessCount) {
	const { incorrectCount, correctCount } = count;
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
