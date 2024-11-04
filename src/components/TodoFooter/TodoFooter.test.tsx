import MockAllProviders from "@/__mocks__/AllProviders"
import { render, screen } from "@testing-library/react"
import TodoFooter, { TodoFooterProps } from "."

const MockTodoFooter = ({ numberOfIncompleteTasks }: TodoFooterProps) => (
	<MockAllProviders>
		<TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
	</MockAllProviders>
)

describe("TodoFooter", () => {
	test("render number of incomplete tasks text", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={4} />)
		const paragraphEl = screen.getByText("4 tasks left")
		expect(paragraphEl).toBeInTheDocument()
	})

	test("render singular incomplete task text", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />)
		const paragraphEl = screen.getByText("1 task left")
		expect(paragraphEl).toBeVisible()
	})
})
