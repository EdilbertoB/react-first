import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    const addNewCategory = (value) => {
        if (!categories.find((e) => e.toLowerCase() == value.toLowerCase()))
            setCategories([value, ...categories]);
    }
    return (
        <>
            <h1> Gif Expert App</h1>
            <AddCategory onSetValue={addNewCategory} />

            {categories.map((ele) => {
                return <GifGrid key={ele} element={ele}></GifGrid>
            })}
        </>
    )
}

