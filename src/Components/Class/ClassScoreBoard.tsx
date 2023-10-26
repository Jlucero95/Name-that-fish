import { Component } from "react";
import "./styles/score-board.css";
import { TGuessCount } from "./ClassApp";

const answersLeft = ["trout", "salmon", "tuna", "shark"];
export class ClassScoreBoard extends Component<{
	countNumbers: TGuessCount;
}> {
	render() {
		const { countNumbers } = this.props;

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
