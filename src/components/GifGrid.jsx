import {GifItem} from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ element }) => {

    const { images, isLoading } = useFetchGif(element);

    return (
        <>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <h3>{element}</h3>
            {
                images.map((img) =>
                (
                    <GifItem key={img.id} {...img} />
                )
                )
            }
        </>
    )
}
