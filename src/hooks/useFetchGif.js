import { getGifs } from "../helpers/functions";
import { useEffect, useState } from "react";

export const useFetchGif = (element) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => {
        const listImg = await getGifs(element);
        setImages(listImg);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}

