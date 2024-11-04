import BannerLayout from "@/layouts/BannerLayout"
import ScreenLayout from "@/layouts/ScreenLayout"
import Followers from "@/screens/Followers"
import SignUpForm from "@/screens/SignUpForm"
import Todo from "@/screens/Todo"
import { createBrowserRouter } from "react-router-dom"

export const PublicRoutes = createBrowserRouter([
	{
		element: <ScreenLayout />,
		children: [
			{
				path: "",
				element: <SignUpForm />
			},
			{
				path: "todo",
				element: <BannerLayout />,
				children: [
					{
						path: "",
						element: <Todo />
					},
					{
						path: "followers",
						element: <Followers />
					},
					{
						path: "*",
						element: <Todo />
					}
				]
			},
			{
				path: "*",
				element: <SignUpForm />
			}
		]
	}
])
