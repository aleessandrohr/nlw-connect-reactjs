import type * as React from "react";

import { cn } from "@/lib/utils";

import { type VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
	"flex h-12 items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 placeholder:text-gray-400",
	{
		variants: {
			variant: {
				default: "",
				error: "border-danger [&>span>svg]:text-danger",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

type InputProps = React.ComponentProps<"input"> &
	VariantProps<typeof inputVariants> & {
		error?: boolean;
	};

function Input({ className, type, variant, error, ...props }: InputProps) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
				inputVariants({ variant, className })
			)}
			{...props}
		/>
	);
}

interface InputWithIconProps extends InputProps {
	icon: React.ReactNode;
}

function InputWithIcon({
	className,
	icon,
	variant,
	...props
}: InputWithIconProps) {
	return (
		<div
			className={cn(inputVariants({ variant, className }), className, "group")}
		>
			<span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100">
				{icon}
			</span>
			<Input
				className="flex-1 border-none bg-transparent focus-visible:ring-0"
				{...props}
			/>
		</div>
	);
}

export { Input, InputWithIcon };
