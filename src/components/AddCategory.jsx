import { useState } from "react"

export const AddCategory = ({ onSetValue }) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if( value !== ''){
            onSetValue(value)
            setInputValue('');
        }
        document.getElementById('inpGif').focus();
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                id="inpGif"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onChangeInput}
            />
            <button type="submit"
                onClick={onSubmit} >Add Cat onSubmit
            </button>
        </form>
    )
}
