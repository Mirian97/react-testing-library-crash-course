import { TodoItemType } from "@/@types/todoType"
import { FC, useState } from "react"
import { v4 as uuid } from "uuid"
import { TodoListProps } from "../TodoList"

const AddTodoInput: FC<TodoListProps> = (props) => {
	const { todos, setTodos } = props
	const [todo, setTodo] = useState("")

	const addTodo = () => {
		if (!todo) return
		let updatedTodos: TodoItemType[] = [
			...todos,
			{
				id: uuid(),
				task: todo,
				completed: false
			}
		]
		setTodos(updatedTodos)
		setTodo("")
	}

	return (
		<form
			className='mt-8 flex justify-between gap-x-2 rounded-md bg-white px-4 py-2 shadow-md'
			onSubmit={(e) => {
				e.preventDefault()
				addTodo()
			}}
		>
			<input
				className='w-[90%] border-none focus:outline-none'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Add a new task here...'
			/>
			<button
				className='rounded-sm border-none bg-[rgb(53,201,157)] px-8 py-2 font-semibold uppercase text-white'
				type='submit'
			>
				Add
			</button>
		</form>
	)
}
export default AddTodoInput
