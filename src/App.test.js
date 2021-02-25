import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("renders App component", () => {
		render(<App />);
		expect(screen.getByText(/Calculator/)).toBeInTheDocument();
		// const linkElement = screen.getByText(/calculator/i);
		// expect(linkElement).toBeInTheDocument();
		// screen.debug();
	});
});
