
export const getGifs = async( category ) => {
        
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=5&api_key=zquzVorMuvnufRlCnG1ejxGifEr6BW7v`;

    const resp = await fetch( endpoint );

    const { data } = await resp.json();

    const gifs = data.map( elem => {
        return ({
            id: elem.id,
            title: elem.title,
            url: elem.images?.downsized_medium.url
        });
    });

    return gifs;

}