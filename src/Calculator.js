import React from "react";

function Key(props) {
	return <button></button>;
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
	}

	const numbers = [[7,8,9],[4,5,6], [1,2,3], [0]];
	const operators = ['+', '-', '*', '/', '='];
	const moreOperators = ['C', '+/-', "%"];

	// keys = 

	render(){
		return (
			<div>
				{keys}
			</div>
		);
	} //render
} //Calculator

export default Calculator;
