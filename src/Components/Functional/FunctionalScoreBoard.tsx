import "./styles/score-board.css";

type FunctionalScoreBoardProps = {
	incorrectCount: number;
	correctCount: number;
	answersLeft: string[];
};

export function FunctionalScoreBoard(props: FunctionalScoreBoardProps) {
	const { incorrectCount, correctCount, answersLeft } = props;

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
