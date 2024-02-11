import { ReactNode, useEffect, useState } from "react";
import { Expander, ExpanderRow, LoadingIndicator, Navigation, ToggleButton } from "../../components";
import "./BreedNavigation.scss";

import { useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

const retrievePosts = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    return response.data;
};

export const BreedNavigation = ({title, children}: {title: string, children?: ReactNode}) => {
    let location = useLocation();
    const { data, error, isLoading } = useQuery("message", retrievePosts);
    const [breeds, setBreeds] = useState<Array<string>>([]);

    useEffect(() => {
        data && setBreeds(Object.keys(data.message));
    }, [data])

    return (
        <Navigation className="breed-navigation">
            <header className="breed-navigation--header">
                <img className="logo" src="./woofer.svg" alt="Woofer logo" />
                <h1>{title}</h1>
            </header>
            {
                error ? <span>There was an error</span> :
                    isLoading ? <LoadingIndicator />:
                        <Expander>
                            {breeds.map((breed, i) => <ExpanderRow key={`expander-row-${i}`} className={location.pathname.includes(breed) && 'active'} to={breed}>{breed}</ExpanderRow>)}
                        </Expander>
            }
            <footer className="breed-navigation--footer">
               {children}
            </footer>
        </Navigation>
    )
}