import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

const inputVariants = cva(
	"flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
	{
		variants: {
			variant: {
				primary:
					"text-gray-500 font-medium rounded-lg focus-visible:ring-[#FFBE9A]/70 ring-offset-transparent focus-visible:ring-1 bg-white/10 shadow-glass border-1 backdrop-blur-sm border border-white/20"
			},
			sizeVariant: {}
		}
	}
)

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, sizeVariant, variant, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(inputVariants({ sizeVariant, variant, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

export { Input }
