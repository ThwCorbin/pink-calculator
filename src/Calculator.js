import React, { useState } from "react";

const CalcKey = ({ calcKey, onClick }) => {
	return (
		<button
			type="button"
			className={"calcKey calcKey_" + calcKey}
			onClick={onClick}
		>
			{calcKey}
		</button>
	);
};

const Calculator = () => {
	// const [active, setActive] = useState(false);
	const [displayNum, setDisplayNum] = useState("0");
	const [memoryNum, setMemoryNum] = useState(null);
	const [operator, setOperator] = useState(null);
	const [signPositive, setSignPositive] = useState(true);
	const [percentPressed, setPercentPressed] = useState(false);
	// const [decimalPressed, setDecimalPressed] = useState(false);

	const storeData = (operatorStr) => {
		if (operatorStr === "C") {
			//Note: need logic for "AC" after "C"
			setDisplayNum("0");
			setMemoryNum(null);
			setOperator(null);
			setSignPositive(true);
			setPercentPressed(false);
			// setDecimalPressed(false);
		} else if (operatorStr === "+/-") {
			if (displayNum === 0) return;
			setSignPositive(signPositive ? false : true);
			setDisplayNum(signPositive ? "-" + displayNum : displayNum.slice(1));
		} else if (operatorStr === "%") {
			if (percentPressed) return;
			//Note: need logic for % when /, *, +, - in display
			let numStr = (Number(displayNum) / 100).toString();
			setPercentPressed(true);
			setDisplayNum(numStr);
		} else if (operatorStr === "color") {
		} else if (operatorStr === ".") {
			if (displayNum.includes(".")) return;
			setDisplayNum(displayNum + ".");
		} else if (operatorStr === "=") {
			// Reset after computation
			setMemoryNum(null);
			setOperator(null);
			setSignPositive(true);
			setPercentPressed(false);
			// setDecimalPressed(false);
		} else if (operator === null) {
			// operatorStr will be one of: "/", "*", "-", "+"
			setMemoryNum(displayNum);
			setOperator(operatorStr);
			setDisplayNum(displayNum + ` ${operatorStr} `);
		}
	};

	const checkString = (string) => {
		displayNum === "0"
			? //Note: need logic for 0/1, 0 * 1, etc.
			  setDisplayNum(string)
			: Number(string) || string === "0"
			? setDisplayNum(displayNum + string)
			: storeData(string);
	};

	const handleClick = (e) => checkString(e.target.textContent);

	const calcKeys = [
		["C", "+/-", "%", "/"],
		["7", "8", "9", "*"],
		["4", "5", "6", "-"],
		["1", "2", "3", "+"],
		["color", "0", ".", "="],
	];

	const calcKeyboard = calcKeys.map((row, idx) => (
		<div className={"calcRow calcRow_" + idx} key={"calcRow" + idx}>
			<CalcKey calcKey={row[0]} onClick={(e) => handleClick(e)} />
			<CalcKey calcKey={row[1]} onClick={(e) => handleClick(e)} />
			<CalcKey calcKey={row[2]} onClick={(e) => handleClick(e)} />
			<CalcKey calcKey={row[3]} onClick={(e) => handleClick(e)} />
		</div>
	));

	return (
		<div className={"calculator"}>
			<div className={"calcDisplay"}>{displayNum}</div>
			{calcKeyboard}
		</div>
	); //return
}; //Calculator

export default Calculator;
