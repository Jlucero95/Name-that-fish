import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../Data/FishData";
import type { TGuessCount } from "../AppTypes.ts/TGuessCount";

export class ClassApp extends Component {
	state: TGuessCount = {
		incorrectCount: 0,
		correctCount: 0,
	};

	render() {
		const { incorrectCount, correctCount } = this.state;
		const totalCount = incorrectCount + correctCount;

		return (
			<>
				<>
					<ClassScoreBoard
						countNumbers={{
							incorrectCount: incorrectCount,
							correctCount: correctCount,
						}}
					/>
					{totalCount < initialFishes.length && (
						<ClassGameBoard
							handleGuessCompare={({ guess, fishName }) => {
								guess === fishName
									? this.setState({ correctCount: correctCount + 1 })
									: this.setState({ incorrectCount: incorrectCount + 1 });
							}}
						/>
					)}
				</>
				{totalCount >= initialFishes.length && (
					<ClassFinalScore
						totals={{
							correctCount: correctCount,
							totalCount: totalCount,
						}}
					/>
				)}
			</>
		);
	}
}
