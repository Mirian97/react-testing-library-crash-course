import { Outlet } from "react-router-dom"

export default function ScreenLayout() {
	return (
		<div className='min-h-dvh w-dvw overflow-y-auto overflow-x-hidden bg-slate-200'>
			<Outlet />
		</div>
	)
}
