import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, LoadingIndicator } from "../../components";
import "./DoggieGrid.scss";
import { useLocation } from "react-router-dom";
import { DoggieSearch } from "./DoggieSearch";

const API_BASE_URL = "https://dog.ceo/api/breed";

export const DoggieGrid = ({ pageSize = 21 }: { pageSize?: number }) => {
    const location = useLocation();
    const [refetching, setRefetching] = useState<boolean>(false);
    const [breed, setBreed] = useState<string>(location.pathname);
    const [apiUrl, setApiUrl] = useState<string>(`${API_BASE_URL}s/image/random/${pageSize}`);

    // const retrieveImages = async () => {
    //     const response = await axios.get(apiUrl);
    //     return response.data;
    // };

    const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
          const newData = await response.data;
          return newData;
        } catch (error) {
          throw new Error('Error fetching data');
        }
      };

    const { data, error, isLoading, refetch } = useQuery(["images", apiUrl], fetchData);
    const [images, setImages] = useState<Array<string>>([]);

    useEffect(() => {
        setBreed(location.pathname);
        console.log('breed', breed, location.pathname)
    }, [location])

    useEffect(() => {
        breed !== "/" && setApiUrl(`${API_BASE_URL}${breed}/images/random/${pageSize}`);
        if (breed === location.pathname) {
            setRefetching(true);
            refetch().then(() => setRefetching(false));
        }
    }, [breed])


    useEffect(() => {
        if (data && typeof data.message[0] === 'string') setImages(data.message);
    }, [data])

    return (
        <div className="doggie-grid">
            {
                location.pathname === "/" ?
                    <DoggieSearch /> : ""
            }
            {
                error ? <span>There was an error</span> :
                    isLoading ? <LoadingIndicator /> :
                        <div className="doggie-grid--images">
                            {refetching ? <LoadingIndicator /> :
                                images.map((image, i) => {
                                    const caption = image.split('/')[image.split('/').length - 2];
                                    return <Card id={`${i}`} key={`doggie-card-${i}`} image={image} imageAlt={`Image of a dog`} caption={caption} />
                                })
                            }
                        </div>
            }
        </div>
    );
};