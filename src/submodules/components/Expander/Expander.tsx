import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import './Expander.scss';
import { IconArrow } from "../Icons";

export const ExpanderRow = ({ to, className, children }: { to: string, className?: string, children: ReactNode }) => {
    return (
        <li className={`expander-row ${className ?? ''}`}><Link to={to}>{children}</Link></li>
    )
}

export const Expander = ({ defaultIsOpen = false, title, Icon, className, children }: { defaultIsOpen?: boolean, title: string, Icon?: JSX.Element, className?: string, children: ReactNode[] }) => {
    const [expanded, setExpanded] = useState(defaultIsOpen);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`expander ${className ?? ''}`}>
            <button className="expander-header" onClick={toggleExpanded} aria-expanded={expanded}>
                <div className="expander-title">
                    {Icon}
                    {title}
                </div>
                <div className={`expander-icon ${expanded ? 'expanded' : ''}`}><IconArrow alt={`arrow ${expanded ? 'up' : 'down'}`} fill="var(--primary-text-color)" /></div>
            </button>
            {expanded && (
                <div className="expander-content">
                    {children}
                </div>
            )}
        </div>
    );

}