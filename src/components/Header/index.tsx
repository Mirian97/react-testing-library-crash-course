import { FC } from "react"

interface HeaderProps {
	title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<h1
			title='Header'
			className='text-6xl uppercase tracking-wider text-white [text-shadow:0.1rem_0.1rem_1rem_rgba(0,0,0,0.342)]'
		>
			{title}
		</h1>
	)
}

export default Header
