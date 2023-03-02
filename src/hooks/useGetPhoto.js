function useGetPhoto(imageId, setImageData) {  
  if (!imageId) return null;

  fetch(`https://api.unsplash.com/photos/${imageId}?client_id=${import.meta.env.VITE_CLIENT_ID}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
    },
  })
    .then(response => response.json())
    .then(data => setImageData(data))
}

export default useGetPhoto;
