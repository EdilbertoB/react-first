export const getGifs = async(element) => {

    const apiKey = '444DhJI1H4Ze8Nd6JERFn57oWC6CoIj9';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${element}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(({id,images,title}) =>(
        {
            id:id,
            title:title,
            url:images.downsized_medium.url
        }
    ))
    // console.log(gifs);
    return gifs;
}