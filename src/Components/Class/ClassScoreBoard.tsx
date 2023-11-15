import "./styles/score-board.css";
import { Component } from "react";

type ClassScoreBoardProps = {
	incorrectCount: number;
	correctCount: number;
	answersLeft: string[];
};

export class ClassScoreBoard extends Component<ClassScoreBoardProps> {
	render() {
		const { incorrectCount, correctCount, answersLeft } = this.props;
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
