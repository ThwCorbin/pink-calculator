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

	const doOperation = (operString) => {
		//this should be string
		console.log(operString);
	};

	const checkString = (string) => {
		displayNum === "0"
			? setDisplayNum(string)
			: Number(string) || string === "0"
			? setDisplayNum(displayNum + string)
			: doOperation(string);
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
