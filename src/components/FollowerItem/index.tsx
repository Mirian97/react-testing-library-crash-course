import { FollowerItemType } from "@/@types/followerType"
import { FC } from "react"

interface FollowerItemProps extends FollowerItemType {
	index: number
}

const FollowerItem: FC<FollowerItemProps> = (props) => {
	const { picture, index, name, login } = props

	return (
		<div
			className='border-1 flex cursor-pointer items-center rounded-lg border-b border-black/10 px-3 py-4 hover:bg-gray-200/80'
			data-testid={`follower-item-${index}`}
		>
			<img src={picture.large} className='size-12 rounded-full' />
			<div className='ml-5'>
				<div className='flex'>
					<h4 className='mr-2'>{name.first}</h4> <h4>{name.last}</h4>
				</div>
				<p>{login.username}</p>
			</div>
		</div>
	)
}

export default FollowerItem
