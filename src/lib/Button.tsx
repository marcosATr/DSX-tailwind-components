import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {}

export default function Button({ className, disabled, ...props }: ButtonProps) {
	return (
		<button
			className={twMerge(
				"flex h-10 w-fit items-center justify-center gap-[10px] rounded-md bg-primary-500 px-5 py-2 font-medium text-base text-white ring-primary-100 hover:bg-primary-600 focus:ring cursor-pointer",
				className,
			)}
			{...props}
		/>
	);
}
//TODO: Update storybook with new button
//TODO: Outlined styles missing