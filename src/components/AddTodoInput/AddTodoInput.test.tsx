import { TodoItemType } from "@/@types/todoType"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AddTodoInput from "."

const getAddTodoElements = () => {
	const input: HTMLInputElement = screen.getByPlaceholderText(
		"Add a new task here..."
	)
	const button: HTMLButtonElement = screen.getByRole("button", { name: /add/i })
	return {
		input,
		button
	}
}
describe("AddTodoInput", () => {
	const setup = () => {
		const todos: TodoItemType[] = []
		const setTodos = jest.fn()
		render(<AddTodoInput todos={todos} setTodos={setTodos} />)
		return { todos, setTodos }
	}
	test("render input and button", () => {
		setup()
		const { input, button } = getAddTodoElements()
		expect(input).toBeInTheDocument()
		expect(button).toBeInTheDocument()
	})

	test("type in input", async () => {
		setup()
		const { input } = getAddTodoElements()
		userEvent.type(input, "Go to cinema!")
		waitFor(() => expect(input.value).toBe("Go to cinema!"))
	})

	test("add new todo item when submit form", async () => {
		const { setTodos } = setup()
		const { input, button } = getAddTodoElements()
		userEvent.type(input, "Another todo")
		userEvent.click(button)
		waitFor(() =>
			expect(setTodos).toHaveBeenCalledWith([
				{
					task: "Another todo",
					completed: false
				}
			])
		)
		waitFor(() => expect(input.value).toBe(""))
	})

	test("prevent add empty todo", async () => {
		const { setTodos } = setup()
		const { input, button } = getAddTodoElements()
		userEvent.type(input, "")
		userEvent.click(button)
		waitFor(() => expect(setTodos).not.toHaveBeenCalled())
	})
})
