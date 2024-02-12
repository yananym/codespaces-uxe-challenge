import { ReactNode, useEffect, useState } from "react";
import { Expander, ExpanderRow, IconDog, LoadingIndicator, Navigation, ToggleButton } from "../../components";
import "./BreedNavigation.scss";

import { useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

const retrieveBreeds = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    return response.data;
};

type Breed = {
    [key: string]: string[];
}

export const BreedNavigation = ({ title, children }: { title: string, children?: ReactNode }) => {
    let location = useLocation();
    const { data, error, isLoading } = useQuery("list", retrieveBreeds);

    return (
        <Navigation className="breed-navigation">
            <header className="breed-navigation--header">
                <a href="/"><img className="logo" src="./woofer.svg" alt="Woofer logo" /><h1>{title}</h1></a>
            </header>
            {
                error ? <span>There was an error</span> :
                    isLoading ? <LoadingIndicator /> :
                        <Expander className='breed-navigation--expander' defaultIsOpen title="Dogs" Icon={<IconDog fill="var(--primary-text-color)" />}>
                            {Object.keys(data?.message).map((breed, i) =>
                                <ExpanderRow key={`expander-row-${i}`} className={location.pathname.includes(breed) && 'active'} to={breed}>
                                    {data?.message[breed].length > 0 ?
                                        <Expander key={`expander-subbreed-${i}`} defaultIsOpen={false} title={breed}>
                                            {data?.message[breed].map((subBreed: string, i) => <ExpanderRow key={`expander-subrow-${i}`} to={`${breed}/${subBreed}`}>{subBreed}</ExpanderRow>)}
                                        </Expander> : breed}
                                </ExpanderRow>
                            )}
                        </Expander>
            }
            <footer className="breed-navigation--footer">
                {children}
            </footer>
        </Navigation>
    )
}