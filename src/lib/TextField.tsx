import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends ComponentProps<"input"> {
	className?: string;
	label?: string;
}

function Input(props: ComponentProps<"input">) {
	return (
		<input
			{...props}
			className="border border-neutral-300 shadow-input py-[10px] px-[12px] rounded-md h-10 placeholder:text-sm placeholder:text-neutral-400 placeholder:justify-center focus-visible:outline-offset-0 focus-visible:outline-primary-300 focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-0 disabled:placeholder:text-neutral-300"
		/>
	);
}

export default function TextField({ label, className, ...props }: TextFieldProps) {
	if (label)
		return (
			<label className={twMerge("flex flex-col w-full gap-1", className)}>
				<span className="text-sm text-neutral-900">{label}</span>
				<Input {...props} />
			</label>
		);

	return <Input {...props} />;
}
