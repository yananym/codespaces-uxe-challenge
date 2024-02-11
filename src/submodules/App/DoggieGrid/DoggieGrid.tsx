import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingIndicator } from "../../components";
import "./DoggieGrid.scss";

const retrievePosts = async () => {
    const response = await axios.get('https://dog.ceo/api/breed/hound/images/random/3');
    return response.data;
};

export const DoggieGrid = () => {
    const { data, error, isLoading } = useQuery("message", retrievePosts);
    const [images, setImages] = useState<Array<string>>([]);

    useEffect(() => {
        console.log(data)
        data && typeof data.message[0] === 'string' && setImages(data.message);
    }, [data])

    return (
        <div className="doggie-grid">
            {
                error ? <span>There was an error</span> :
                    isLoading ? <LoadingIndicator /> :
                        <div className="doggie-grid--images">
                            {images.map((image, i) => <article className="doggie-card"><img key={i} src={image} alt="doggie" /></article>)}
                        </div>
            }
        </div>
    );
};