import { TodoItemType } from "@/@types/todoType"
import AddTodoInput from "@/components/AddTodoInput"
import Header from "@/components/Header"
import TodoList from "@/components/TodoList"
import { useState } from "react"

export default function Todo() {
	const [todos, setTodos] = useState<TodoItemType[]>([])

	return (
		<div className='todo'>
			<Header title='Todo' />
			<AddTodoInput todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	)
}
