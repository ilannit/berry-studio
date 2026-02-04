import * as React from "react"
import { cn } from "../../lib/utils"

const Input = React.forwardRef(({ className, type, label, error, name, id, ...props }, ref) => {
    const inputId = id || name;
    return (
        <div className="w-full mb-4">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-slate-700 mb-2"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                id={inputId}
                name={name}
                className={cn(
                    "flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    error && "border-red-500 focus-visible:ring-red-500",
                    className
                )}
                ref={ref}
                {...props}
            />
            {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
        </div>
    )
})
Input.displayName = "Input"

export default Input
