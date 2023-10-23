import { Component } from "react";
import "./styles/score-board.css";
import { TGuessCount } from "./ClassApp";

const answersLeft = ["trout", "salmon", "tuna", "shark"];
export class ClassScoreBoard extends Component<{
	countNumbers: TGuessCount;
}> {
	state: TGuessCount = {
		incorrectCount: 0,
		correctCount: 0,
	};
	render() {
		const { countNumbers } = this.props;
		this.setState({
			incorrectCount: countNumbers.incorrectCount,
			correctCount: countNumbers.correctCount,
		});
		return (
			<div id="score-board">
				<div>Incorrect 🔻: {this.state.incorrectCount}</div>
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
				<div>Correct ✅: {this.state.correctCount}</div>
			</div>
		);
	}
}
