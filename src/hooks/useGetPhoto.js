function useGetPhoto(imageId, setImageData) {  
  if (!imageId) return null;

  fetch(`http://api.unsplash.com/photos/${imageId}?client_id=${import.meta.env.VITE_CLIENT_ID}`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => setImageData(data))
}

export default useGetPhoto;
