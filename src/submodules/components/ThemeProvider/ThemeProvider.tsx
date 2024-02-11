import { ReactNode } from "react";
import './ThemeProvider.scss';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <div className='theme-provider'>
            {children}
        </div>
    );
}