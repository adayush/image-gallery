function useListPhotos(query, page = 1, imageData, setImageData) {
  const URL = query ? `https://api.unsplash.com/search/photos?query=${query}&` : "https://api.unsplash.com/photos?"
  
  fetch(`${URL}page=${page}&client_id=${import.meta.env.VITE_CLIENT_ID}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
    },
  })
    .then(response => response.json())
    .then(data => data.results || data)
    .then(data => {
      if (page > 1) {
        console.log('concatenated')
        setImageData(imageData.concat(data));
      } else {
        setImageData(data);
      }
    })
}

export default useListPhotos;
