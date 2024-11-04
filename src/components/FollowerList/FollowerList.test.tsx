import MockAllProviders from "@/__mocks__/AllProviders"
import { render, screen } from "@testing-library/react"
import axios from "axios"
import FollowerList from "."

const mockResponse = {
	data: {
		results: [
			{
				name: {
					first: "Laith",
					last: "Harb"
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/59.jpg"
				},
				login: {
					username: "ThePhonyGOAT"
				}
			},
			{
				name: {
					first: "Mirian",
					last: "Quispe"
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/60.jpg"
				},
				login: {
					username: "TheJustGOAT"
				}
			}
		]
	}
}

const MockFollowerList = () => (
	<MockAllProviders>
		<FollowerList />
	</MockAllProviders>
)

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("FollowerList", () => {
	beforeEach(() => {
		mockedAxios.get.mockResolvedValue(mockResponse)
	})
	test("render one follower item", async () => {
		render(<MockFollowerList />)
		const followerElement = await screen.findByTestId("follower-item-0")
		expect(followerElement).toBeInTheDocument()
	})

	test("render multiple follower items", async () => {
		render(<MockFollowerList />)
		const followerElement = await screen.findAllByTestId(/follower-item/i)
		expect(followerElement.length).toBe(2)
	})
})
