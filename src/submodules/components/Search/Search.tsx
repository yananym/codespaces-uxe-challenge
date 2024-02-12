import { useState } from "react";
import { Button } from "../Button";
import './Search.scss';

export const Search = ({ onSearch, placeholder = "Search", submitLabel = "Search", onResultClick, results = [] }:
    { onSearch: (query: string) => void, placeholder?: string, submitLabel?: string, onResultClick: (result: string) => void, results: string[] }) => {
    const [query, setQuery] = useState('');

    const [showPopover, setShowPopover] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        onSearch(inputValue);
        if (inputValue.trim() !== '') {
            // Implement your search logic here
            // For demonstration purposes, let's assume search results are set based on the query
            setSearchResults(results.filter((result) => result.toLowerCase().includes(inputValue.toLowerCase())));
            setShowPopover(true);
        } else {
            setShowPopover(false);
        }
    };

    const handleItemClick = (item: string) => {
        // Handle item click action (e.g., navigate to the selected item)
        onResultClick(item);
        setShowPopover(false);
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                />
                <Button onClick={() => onSearch(query)} type='submit'>{submitLabel}</Button>{showPopover && (
                    <div className="popover">
                        <ul>
                            {searchResults.map((item, index) => (
                                <li key={index} onClick={() => handleItemClick(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </>
    );
};