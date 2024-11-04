import { render, screen } from "@testing-library/react"
import Header from "."

describe("Header", () => {
	it("render title header", () => {
		render(<Header title='My Todo Header' />)
		const heading = screen.getByRole("heading", {
			name: /my todo header/i
		})
		expect(heading).toBeInTheDocument()
	})
})
