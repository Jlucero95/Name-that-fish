import "./styles/score-board.css";
import { initialAnswersLeft } from "../Data/AnswersLeftData.ts";

type FunctionalScoreBoardProps = {
	incorrectCount: number;
	correctCount: number;
};

export function FunctionalScoreBoard(props: FunctionalScoreBoardProps) {
	const { incorrectCount, correctCount } = props;
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
