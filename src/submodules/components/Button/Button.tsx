import { ReactNode } from 'react';
import './Button.scss';

export const Button = ({ onClick, children, ariaLabel, type = "button" }: {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    ariaLabel?: string;
    type?: "button" | "submit" | "reset";
}) => {
    return (
      <button type={type} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </button>
    );
  };