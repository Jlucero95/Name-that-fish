import { Component } from "react";
import type { TCountTotals } from "../AppTypes.ts/TCountTotals";

export class ClassFinalScore extends Component<{
	totals: TCountTotals;
}> {
	render() {
		const { totalCount, correctCount } = this.props.totals;
		return (
			<div id="final-score">
				<h1>Your Final Score Was</h1>
				<div id="score">
					<p>{correctCount}</p>
					<hr />
					<p>{totalCount}</p>
				</div>
			</div>
		);
	}
}
