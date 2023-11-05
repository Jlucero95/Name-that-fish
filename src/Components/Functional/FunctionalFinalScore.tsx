import { TCountTotals } from "../AppTypes.ts/TCountTotals";
import "./styles/final-score.css";

export function FunctionalFinalScore(props: { totals: TCountTotals }) {
	const { totalCount, correctCount } = props.totals;

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
