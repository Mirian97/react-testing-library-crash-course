import { FollowerItemType } from "@/@types/followerType"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FollowerItem from "../FollowerItem"

const FollowerList = () => {
	const [followers, setFollowers] = useState<FollowerItemType[]>([])

	useEffect(() => {
		const fetchFollowers = async () => {
			const { data } = await axios.get("https://randomuser.me/api/?results=5")
			setFollowers(data.results)
		}
		fetchFollowers()
	}, [])

	return (
		<div className='mt-8 flex h-[65dvh] flex-col justify-between overflow-y-auto rounded-md bg-white p-4 shadow-md'>
			<div>
				{followers.map((follower, index) => (
					<FollowerItem {...follower} key={index} index={index} />
				))}
			</div>
			<div className='px-1'>
				<Link
					to='/todo'
					className='font-semibold text-gray-800 underline-offset-2 hover:text-green-800 hover:underline'
				>
					Go Back
				</Link>
			</div>
		</div>
	)
}

export default FollowerList
