import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
	render(<Calculator />);
	it("renders App component", () => {
		expect(screen.getAllByRole("button")).toHaveLength(20);
		expect(screen.getByRole("button", { name: /color/i })).toBeInTheDocument();
	});
});
