import { Component } from "react";
import "./styles/score-board.css";
import { TGuessCount } from "./ClassApp";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component<{
	countNumbers: TGuessCount;
}> {
	state = {
		countCheck: 0,
		countTest: false,
	};

	render() {
		const { countNumbers } = this.props;
		const { countCheck, countTest } = this.state;
		const totalCount = countNumbers.correctCount + countNumbers.incorrectCount;
		if (totalCount > countCheck) {
			this.setState({ countCheck: countCheck + 1 });
			this.setState({ countTest: true });
		}
		if (countTest) {
			answersLeft.splice(answersLeft.length - 1);
			this.setState({ countTest: false });
		}
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
