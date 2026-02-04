import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef(({ className, hoverable, noPadding, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-lg border bg-card text-card-foreground shadow-sm bg-white/80 backdrop-blur-sm",
            hoverable && "transition-all hover:-translate-y-1 hover:shadow-md cursor-default",
            !noPadding && "p-6",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export default Card
