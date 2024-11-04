import Banner from "@/components/Banner"
import { Outlet } from "react-router-dom"

export default function BannerLayout() {
	return (
		<div className='flex min-h-dvh w-dvw flex-col items-center'>
			<Banner />
			<div className='mt-[-25vh] w-full max-w-screen-md px-4'>
				<Outlet />
			</div>
		</div>
	)
}
