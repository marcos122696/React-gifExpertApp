

export const getGifts = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?Q=${ encodeURI( category ) }&limit=12&api_key=Mc90Ndyk2hPX0LDXJEVoW9LHJNDFzH3D`;
    // const url = 'https://api.giphy.com/v1/gifs/search?Q=Los+Simpsons&limit=10&api_key=Mc90Ndyk2hPX0LDXJEVoW9LHJNDFzH3D';
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img  => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    
    return gifs;
};