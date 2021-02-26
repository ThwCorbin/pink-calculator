import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
	it("renders App component", () => {
		render(<Calculator />);
		screen.getAllByRole("button");
		screen.debug();
	});
});
