import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import './Expander.scss';

export const ExpanderRow = ({ to, className, children }: { to: string, className?: string, children: ReactNode }) => {
    return (
        <li className={`expander-row ${className ?? ''}`}><Link to={to}>{children}</Link></li>
    )
}

export const Expander = ({ defaultIsOpen = false, title, icon, iconAlt, className, children }: { defaultIsOpen?: boolean, title: string, icon?: string, iconAlt?: string, className?: string, children: ReactNode[] }) => {
    const [expanded, setExpanded] = useState(defaultIsOpen);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`expander ${className ?? ''}`}>
            <button className="expander-header" onClick={toggleExpanded} aria-expanded={expanded}>
                <div className="expander-title">
                    {icon && <img src={icon} alt={iconAlt} />}
                    {title}
                </div>
                <div className={`expander-icon ${expanded ? 'expanded' : ''}`}><img src="./arrow.svg" alt={`arrow ${expanded ? 'up' : 'down'}`} /></div>
            </button>
            {expanded && (
                <div className="expander-content">
                    {children}
                </div>
            )}
        </div>
    );

}