import ScreenLayout from "@/layouts/ScreenLayout"
import SignUpForm from "@/screens/SignUpForm"
import { createBrowserRouter } from "react-router-dom"
import Kitten from "../screens/Kitten"

export const PublicRoutes = createBrowserRouter([
	{
		element: <ScreenLayout />,
		children: [
			{
				path: "",
				element: <SignUpForm />
			},
			{
				path: "kitten",
				element: <Kitten />
			},
			{
				path: "*",
				element: <SignUpForm />
			}
		]
	}
])
