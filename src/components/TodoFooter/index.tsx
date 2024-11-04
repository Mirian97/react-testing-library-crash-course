import { formatPlural } from "@/helpers/formatPlural"
import { FC } from "react"
import { Link } from "react-router-dom"

export interface TodoFooterProps {
	numberOfIncompleteTasks: number
}

const TodoFooter: FC<TodoFooterProps> = (props) => {
	const { numberOfIncompleteTasks } = props
	return (
		<div className='flex justify-between bg-white/30 px-1 pt-4 backdrop-blur-sm'>
			<p className='font-semibold text-gray-800'>
				{`${numberOfIncompleteTasks} ${formatPlural(numberOfIncompleteTasks, "task", "tasks")} left`}
			</p>
			<Link
				to='followers'
				className='font-semibold text-gray-800 underline-offset-2 hover:text-green-800 hover:underline'
			>
				Followers
			</Link>
		</div>
	)
}

export default TodoFooter
