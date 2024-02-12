import { useState } from "react";
import { Button } from "../Button";
import './Search.scss';

export const Search = ({ onSearch, placeholder = "Search", submitLabel = "Search" }: {onSearch: (query: string) => void, placeholder?: string, submitLabel?: string}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
            />
            <Button onClick={() => onSearch(query)} type='submit'>{submitLabel}</Button>
        </div>
    );
};