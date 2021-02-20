import React from "react";

function CalcKey(props) {
	return (
		<button
			className={"calcKey calcKey_" + props.calcKey}
			onClick={() => props.onClick()}
		>
			{props.calcKey}
		</button>
	);
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		console.log(e);
	}

	render() {
		const calcKeys = [
			["C", "+/-", "%", "/"],
			["7", "8", "9", "X"],
			["4", "5", "6", "-"],
			["1", "2", "3", "+"],
			["color", "0", ".", "="],
		];

		const calcKeyboard = calcKeys.map((row, idx) => (
			<div className={"calcRow calcRow_" + idx}>
				<CalcKey calcKey={row[0]} onClick={this.handleClick()} />
				<CalcKey calcKey={row[1]} onClick={this.handleClick()} />
				<CalcKey calcKey={row[2]} onClick={this.handleClick()} />
				<CalcKey calcKey={row[3]} onClick={this.handleClick()} />
			</div>
		));

		return (
			<div className={"calculator"}>
				<div className={"calcDisplay"}>{this.state.value}</div>
				{calcKeyboard}
			</div>
		); //return
	} //render
} //Calculator

export default Calculator;
