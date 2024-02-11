import { ReactNode } from "react"

export const Navigation = ({children, className}: {children?: ReactNode, className?: string}) => {
    return (
        <nav className={className}>
            {children}
        </nav>
    )
}