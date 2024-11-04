import MockAllProviders from "@/__mocks__/AllProviders"
import { screen, waitFor } from "@testing-library/dom"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Todo from "."

const MockTodoScreen = () => (
	<MockAllProviders>
		<Todo />
	</MockAllProviders>
)

const addTasks = async (tasks: string[]) => {
	const input: HTMLInputElement = screen.getByPlaceholderText(
		"Add a new task here..."
	)
	const button: HTMLButtonElement = screen.getByRole("button", { name: /add/i })
	tasks.forEach((task) => {
		userEvent.type(input, task)
		userEvent.click(button)
	})
	return {
		input,
		button
	}
}

describe("Todo", () => {
	test("render task item when submit", async () => {
		render(<MockTodoScreen />)
		await addTasks(["Go to shopping"])
		waitFor(() =>
			expect(screen.getByText("Go to shopping")).toBeInTheDocument()
		)
	})

	test("render multiple task after submit", async () => {
		render(<MockTodoScreen />)
		await addTasks(["Go to shopping", "Pet my Cat", "Brush my teeth"])
		waitFor(() =>
			expect(screen.getAllByTestId(/todo-item/i)).toBeInTheDocument()
		)
	})
})
