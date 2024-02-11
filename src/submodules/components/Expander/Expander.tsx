import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './Expander.scss';

export const ExpanderRow = ({ to, className, children }: { to: string, className?: string, children: ReactNode }) => {
    return (
        <li className={`expander-row ${className ?? ''}`}><Link to={to}>{children}</Link></li>
    )
}

export const Expander = ({ children }: { children: ReactNode }) => {
    return (
        <ul className="expander">{children}</ul>
    )
}