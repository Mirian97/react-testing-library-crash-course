import { TodoItemType } from "@/@types/todoType"
import { Dispatch, FC, SetStateAction } from "react"
import TodoFooter from "../TodoFooter"
import TodoItem from "../TodoItem"

export interface TodoListProps {
	todos: TodoItemType[]
	setTodos: Dispatch<SetStateAction<TodoItemType[]>>
}

const TodoList: FC<TodoListProps> = (props) => {
	const { todos, setTodos } = props

	const onUpdatedTask = (id: string) => {
		let updatedTasks = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
				return todo
			}
			return todo
		})
		setTodos(updatedTasks)
	}

	const calcNumberOfIncompletedTasks = () => {
		let count = 0
		todos.forEach((todo) => {
			if (!todo.completed) count++
		})
		return count
	}

	return (
		<div className='mt-8 flex h-[50dvh] flex-col justify-between rounded-md bg-white p-4 shadow-md'>
			<div className='h-[90dvh] overflow-y-auto'>
				<div>
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							onUpdateTask={onUpdatedTask}
							data-testid='todo-item'
							{...todo}
						/>
					))}
				</div>
			</div>
			<TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
		</div>
	)
}

export default TodoList
