import { Component } from "react";

export type TCountTotals = {
	correctCount: number;
	totalCount: number;
};

export class ClassFinalScore extends Component<{
	totals: TCountTotals;
}> {
	render() {
		const { totals } = this.props;
		return (
			<div id="final-score">
				<h1>Your Final Score Was</h1>
				<div id="score">
					<p>{totals.correctCount}</p>
					<hr />
					<p>{totals.totalCount}</p>
				</div>
			</div>
		);
	}
}
