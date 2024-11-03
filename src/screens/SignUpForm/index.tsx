import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, useState } from "react"
import validator from "validator"

export interface SignUpFormType {
	email: string
	password: string
	confirmPassword: string
}

const DEFAULT_SIGNUP_FORM = {
	email: "",
	password: "",
	confirmPassword: ""
}

export default function SignUpForm() {
	const [signupForm, inputSignupForm] =
		useState<SignUpFormType>(DEFAULT_SIGNUP_FORM)
	const [error, setError] = useState("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		inputSignupForm({
			...signupForm,
			[e.target.name]: e.target.value
		})
	}

	const handleClick = () => {
		if (!validator.isEmail(signupForm.email)) {
			return setError("The email you input is invalid.")
		} else if (signupForm.password.length < 5) {
			return setError(
				"The password you entered should contain 5 or more characters."
			)
		} else if (signupForm.password !== signupForm.confirmPassword) {
			return setError("The passwords don't match. Try again.")
		}
	}

	return (
		<div className='bg-pink-circles flex min-h-dvh items-center justify-center bg-cover bg-no-repeat transition-[height]'>
			<div className='shadow-glass border-primary-200 w-[450px] max-w-full rounded-[80px] border-4 bg-white/10 p-10 pb-14 text-white backdrop-blur-sm'>
				<h1 className='mb-5 text-center text-5xl font-semibold [text-shadow:1px_1px_3px_pink]'>
					Sign Up
				</h1>
				<form
					className='flex flex-col gap-4'
					onSubmit={(e) => {
						e.preventDefault()
						handleClick()
					}}
				>
					<div className='flex flex-col gap-1'>
						<Label variant='primary' size='md' htmlFor='name'>
							E-mail
						</Label>
						<Input
							id='name'
							variant='primary'
							name='email'
							onChange={handleChange}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<Label variant='primary' size='md' htmlFor='password'>
							Password
						</Label>
						<Input
							id='password'
							variant='primary'
							type='password'
							name='password'
							onChange={handleChange}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<Label variant='primary' size='md' htmlFor='confirm-password'>
							Repeat Password
						</Label>
						<Input
							id='confirm-password'
							variant='primary'
							type='password'
							name='confirmPassword'
							onChange={handleChange}
						/>
					</div>
					{error && <p className='text-center text-sm text-red-500'>{error}</p>}
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</form>
			</div>
		</div>
	)
}
