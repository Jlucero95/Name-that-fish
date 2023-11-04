import { Component } from "react";
import "./styles/score-board.css";
import type { TGuessCount } from "../AppTypes.ts/TGuessCount";
import { initialAnswersLeft } from "../AnswersLeftData";

export class ClassScoreBoard extends Component<{
	countNumbers: TGuessCount;
}> {
	render() {
		const { countNumbers } = this.props;
		const totalCount = countNumbers.correctCount + countNumbers.incorrectCount;
		const answersLeft = initialAnswersLeft.slice(totalCount);
		return (
			<div id="score-board">
				<div>Incorrect 🔻: {countNumbers.incorrectCount}</div>
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
				<div>Correct ✅: {countNumbers.correctCount}</div>
			</div>
		);
	}
}
