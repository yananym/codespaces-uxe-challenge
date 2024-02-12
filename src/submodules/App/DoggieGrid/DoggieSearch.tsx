import { useNavigate } from "react-router-dom";
import { Search } from "../../components";
import { useRecoilValue } from "recoil";
import { breedsState } from "../atoms";
import { useState } from "react";

export const DoggieSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const breeds = useRecoilValue(breedsState);

    return (
        <div className="doggie-grid--search">
            <Search
                placeholder="Dog type"
                onSearch={(query) => setSearchQuery(query)}
                onResultClick={(result) => navigate(`/${result}`)}
                results={breeds.filter((breed) => breed.toLowerCase().includes(searchQuery.toLowerCase()))}
            />
        </div>
    )
}