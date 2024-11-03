import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SignUpForm, { SignUpFormType } from "."

beforeEach(() => {
	render(<SignUpForm />)
})

const typeIntoForm = async ({
	email,
	password,
	confirmPassword
}: Partial<SignUpFormType>) => {
	const emailInput: HTMLInputElement = screen.getByRole("textbox", {
		name: "E-mail"
	})
	const passwordInput: HTMLInputElement = screen.getByLabelText("Password")
	const confirmPasswordInput: HTMLInputElement =
		screen.getByLabelText("Repeat Password")
	if (email) {
		await userEvent.type(emailInput, email)
	}
	if (password) {
		await userEvent.type(passwordInput, password)
	}
	if (confirmPassword) {
		await userEvent.type(confirmPasswordInput, confirmPassword)
	}
	return {
		emailInput,
		passwordInput,
		confirmPasswordInput
	}
}

const clickSubmitButton = async () => {
	const submitButton = screen.getByRole("button", {
		name: "Submit"
	})
	await userEvent.click(submitButton)
}

describe("BasicForm", () => {
	test("render inputs with empty values", () => {
		const emailInput: HTMLInputElement = screen.getByLabelText(/e-mail/i)
		const passwordInput: HTMLInputElement = screen.getByLabelText("Password")
		const confirmPasswordInput: HTMLInputElement =
			screen.getByLabelText("Repeat Password")
		expect(emailInput.value).toBe("")
		expect(passwordInput.value).toBe("")
		expect(confirmPasswordInput.value).toBe("")
	})

	test("type into email input", async () => {
		const { emailInput } = await typeIntoForm({ email: "test123@outlook.com" })
		expect(emailInput.value).toBe("test123@outlook.com")
	})

	test("type into password input", async () => {
		const { passwordInput } = await typeIntoForm({ password: "Password" })
		expect(passwordInput.value).toBe("Password")
	})

	test("type into confirm password input", async () => {
		const { confirmPasswordInput } = await typeIntoForm({
			confirmPassword: "Password1234"
		})
		expect(confirmPasswordInput.value).toBe("Password1234")
	})

	test("show error message when input invalid email", async () => {
		const errorMessage = "The email you input is invalid."
		expect(screen.queryByText(errorMessage)).not.toBeInTheDocument()
		await typeIntoForm({ email: "invalid-email" })
		await clickSubmitButton()
		expect(await screen.findByText(errorMessage)).toBeInTheDocument()
	})

	test("show error message when input password less than 5 characteres", async () => {
		const errorMessage =
			"The password you entered should contain 5 or more characters."
		expect(screen.queryByText(errorMessage)).not.toBeInTheDocument()
		await typeIntoForm({ email: "test@email.com", password: "pass" })
		await clickSubmitButton()
		expect(await screen.findByText(errorMessage)).toBeInTheDocument()
	})

	test("show error message when passwords dont match", async () => {
		const errorMessage = "The passwords don't match. Try again."
		await typeIntoForm({
			email: "test@email.com",
			password: "password",
			confirmPassword: "pass"
		})
		await clickSubmitButton()
		expect(await screen.findByText(errorMessage)).toBeInTheDocument()
	})

	test("show no error message when fill correctly", async () => {
		const errorMessage = "The passwords don't match. Try again."
		await typeIntoForm({
			email: "test@email.com",
			password: "password",
			confirmPassword: "password"
		})
		await clickSubmitButton()
		expect(screen.queryByText(errorMessage)).not.toBeInTheDocument()
	})
})
