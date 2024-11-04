import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { v4 as uuid } from "uuid"
import TodoItem, { TodoItemProps } from "."

const todoItemProps: TodoItemProps = {
	id: uuid(),
	completed: false,
	task: "My custom task",
	onUpdateTask: jest.fn()
}

describe("TodoItem", () => {
	test("when completed should have 'line-through' class", () => {
		render(<TodoItem {...todoItemProps} completed={true} />)
		const taskElement = screen.getByText(todoItemProps.task)
		expect(taskElement).toHaveClass("line-through")
	})

	test("when uncomplete should not have 'line-through' class", () => {
		render(<TodoItem {...todoItemProps} />)
		const taskElement = screen.getByText(todoItemProps.task)
		expect(taskElement).not.toHaveClass("line-through")
	})

	test("click to complete and uncomplete task", async () => {
		render(<TodoItem {...todoItemProps} />)
		const taskElement = screen.getByText(todoItemProps.task)
		userEvent.click(taskElement)
		waitFor(() => expect(taskElement).toHaveClass("line-through"))
		userEvent.click(taskElement)
		waitFor(() => expect(taskElement).not.toHaveClass("line-through"))
	})
})
