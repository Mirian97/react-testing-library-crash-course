import { TodoItemType } from "@/@types/todoType"
import { cn } from "@/lib/utils"
import { FC } from "react"

export interface TodoItemProps extends TodoItemType {
	onUpdateTask: (todoID: string) => void
}

const TodoItem: FC<TodoItemProps> = (props) => {
	const { onUpdateTask, id, task, completed } = props

	return (
		<div
			className={cn(
				"cursor-pointer border-b border-gray-400 py-4",
				completed && "text-gray-500 line-through"
			)}
			onClick={() => onUpdateTask(id)}
		>
			{task}
		</div>
	)
}

export default TodoItem
