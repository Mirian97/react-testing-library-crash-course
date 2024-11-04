import FollowerList from "@/components/FollowerList"
import Header from "@/components/Header"

export default function Followers() {
	return (
		<div className='followers'>
			<Header title='Followers' />
			<FollowerList />
		</div>
	)
}
