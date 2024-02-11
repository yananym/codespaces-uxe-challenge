import './Button.scss';

export const Button = ({ onClick, children, ariaLabel, type }) => {
    return (
      <button type={type} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </button>
    );
  };