import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = ({ label, error, id, ...props }: InputProps) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block mb-2.5 text-sm font-medium text-heading"
            >
                {label}
            </label>

            <input
                id={id}
                {...props}
                className="w-full bg-neutral-secondary-medium px-3 py-2.5 shadow-md placeholder:text-body w-sm"
            />

            {error && (
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;