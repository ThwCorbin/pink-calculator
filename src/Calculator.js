import React from "react";

function CalcKey(props) {
	return (
		<button
			className={"calcKey calcKey_" + props.calcKey}
			onClick={props.onClick}
		>
			{props.calcKey}
		</button>
	);
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayNum: "0",
		};
		this.handleClick = this.handleClick.bind(this);
	}

	updateNumber(numString) {
		const { displayNum } = this.state;
		if (displayNum === "0") {
			this.setState({
				displayNum: numString,
			});
		} else {
			this.setState({
				displayNum: displayNum + numString,
			});
		}
	}

	updateOperator(operString) {
		//this should be string
		console.log(operString);
	}

	checkString(string) {
		string === "0"
			? this.updateNumber(string)
			: Number(string)
			? this.updateNumber(string)
			: this.updateOperator(string);
	}

	handleClick(e) {
		this.checkString(e.target.textContent);
	}

	render() {
		const calcKeys = [
			["C", "+/-", "%", "/"],
			["7", "8", "9", "*"],
			["4", "5", "6", "-"],
			["1", "2", "3", "+"],
			["color", "0", ".", "="],
		];

		const calcKeyboard = calcKeys.map((row, idx) => (
			<div className={"calcRow calcRow_" + idx} key={"calcRow" + idx}>
				<CalcKey calcKey={row[0]} onClick={(e) => this.handleClick(e)} />
				<CalcKey calcKey={row[1]} onClick={(e) => this.handleClick(e)} />
				<CalcKey calcKey={row[2]} onClick={(e) => this.handleClick(e)} />
				<CalcKey calcKey={row[3]} onClick={(e) => this.handleClick(e)} />
			</div>
		));

		return (
			<div className={"calculator"}>
				<div className={"calcDisplay"}>{this.state.displayNum}</div>
				{calcKeyboard}
			</div>
		); //return
	} //render
} //Calculator

export default Calculator;
