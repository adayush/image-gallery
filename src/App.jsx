import { useEffect, useState } from 'react'

import Header from './components/Header'
import Cover from './components/Cover'
import Gallery from './components/Gallery'
import Loading from './components/Loading'

import data from './data.json'
import './App.css'

function App() {
  const [imageData, setImageData] = useState(data);

  console.log(imageData[0])

  return (
    <div className="App">
      <div>
        <Header />
        <Cover />
        {imageData.length
        ? <Gallery imageData={imageData} />
        : <Loading />
        }
      </div>
    </div>
  )
}

export default App
