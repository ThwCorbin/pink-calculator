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
	const [displayNum, setDisplayNum] = useState("0");
	const [memoryNum, setMemoryNum] = useState(null);
	const [operator, setOperator] = useState(null);
	const [sign, setSign] = useState("+");

	const storeData = (operatorStr) => {
		if (operatorStr === "C") {
			setDisplayNum("0");
			setMemoryNum(null);
			setOperator(null);
		} else if (operatorStr === "+/-") {
			if (displayNum === 0) return;
			setDisplayNum(sign === "+" ? "-" : "+");
		} else if (operatorStr === "%") {
		} else if (operatorStr === "color") {
		} else if (operatorStr === ".") {
		} else if (operatorStr === "=") {
		} else if (operator === null) {
			// operatorStr will be one of: "/", "*", "-", "+"
			setMemoryNum(displayNum);
			setOperator(operatorStr);
			setDisplayNum(displayNum + ` ${operatorStr} `);
		}
	};

	const checkString = (string) => {
		displayNum === "0"
			? setDisplayNum(string)
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
