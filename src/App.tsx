import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import { PublicRoutes } from "./routes/PublicRoutes"

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={PublicRoutes} />
		</Suspense>
	)
}

export default App
