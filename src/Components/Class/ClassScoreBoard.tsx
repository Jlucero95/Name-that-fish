import "./styles/score-board.css";
import { Component } from "react";
import { initialAnswersLeft } from "../Data/AnswersLeftData";

type ClassScoreBoardProps = {
	incorrectCount: number;
	correctCount: number;
};

export class ClassScoreBoard extends Component<ClassScoreBoardProps> {
	render() {
		const { incorrectCount, correctCount } = this.props;
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
