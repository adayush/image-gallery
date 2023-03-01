function useListPhotos(query, page = 1, imageData, setImageData) {
  const URL = query ? `http://api.unsplash.com/search/photos?query=${query}&` : "http://api.unsplash.com/photos?"
  
  fetch(`${URL}page=${page}&client_id=${import.meta.env.VITE_CLIENT_ID}`, {
    method: 'GET'
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
