import "./styles/score-board.css";
import { initialAnswersLeft } from "../AnswersLeftData.ts";
import { TGuessCount } from "../AppTypes.ts/TGuessCount.ts";

const answersLeft = initialAnswersLeft.slice(1);

export function FunctionalScoreBoard(count: TGuessCount) {
	const incorrectCount = count.incorrectCount;
	const correctCount = count.correctCount;
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
