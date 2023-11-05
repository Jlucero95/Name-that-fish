import { Component } from "react";
import "./styles/score-board.css";
import type { TGuessCount } from "../AppTypes.ts/TGuessCount";
import { initialAnswersLeft } from "../Data/AnswersLeftData";

export class ClassScoreBoard extends Component<{
	countNumbers: TGuessCount;
}> {
	render() {
		const { incorrectCount, correctCount } = this.props.countNumbers;
		const totalCount = correctCount + incorrectCount;
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
}
