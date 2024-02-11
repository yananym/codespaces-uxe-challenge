import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, LoadingIndicator } from "../../components";
import "./DoggieGrid.scss";
import { useLocation } from "react-router-dom";


export const DoggieGrid = ({ pageSize = 21 }: { pageSize?: number }) => {
    let location = useLocation();
    const [refetching, setRefetching] = useState<boolean>(false);
    const [breed, setBreed] = useState<string>(location.pathname);
    const [apiUrl, setApiUrl] = useState<string>(`https://dog.ceo/api/breeds/image/random/${pageSize}`);

    const retrieveImages = async () => {
        const response = await axios.get(apiUrl);
        return response.data;
    };

    const { data, error, isLoading, refetch } = useQuery("images", retrieveImages);
    const [images, setImages] = useState<Array<string>>([]);

    useEffect(() => {
        setBreed(location.pathname);
    }, [location])

    useEffect(() => {
        setApiUrl(`https://dog.ceo/api/breed${breed}/images/random/${pageSize}`);
        setRefetching(true);
        refetch().then(() => setRefetching(false));
    }, [breed])


    useEffect(() => {
        console.log(data)
        if (data && typeof data.message[0] === 'string') setImages(data.message);
    }, [data])

    return (
        <div className="doggie-grid">
            {
                error ? <span>There was an error</span> :
                    isLoading ? <LoadingIndicator /> :
                        <div className="doggie-grid--images">
                            {refetching ? <LoadingIndicator /> :
                                images.map((image, i) => {
                                    const caption = image.split('/')[image.split('/').length - 2];
                                    return <Card key={`doggie-card-${i}`} image={image} imageAlt={`Image of a dog`} caption={caption} />
                                })
                            }
                        </div>
            }
        </div>
    );
};