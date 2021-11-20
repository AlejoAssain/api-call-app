import './App.css';
import Navbar from "./components/Navbar"
import Photos from "./components/Photos"
import { useState } from "react"

function App() {
  const [photos, setPhotos] = useState("initial state");

  const handleSubmit = async (searchValue) => {
    if (searchValue === "") {
      return []
    }

    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${searchValue}`,
    {
      headers: {
        // set env var or enter API key
        "Authorization": `Client-ID ${process.env.UNSPLASH.API_KEY}`
      }
    })
    const data = await response.json()
    console.log(data.results)
    
    setPhotos(data.results)
  }

  return (
    <div className="App">
      <Navbar handleSubmit={handleSubmit} />
      <Photos photos={photos} />
    </div>
  );
}

export default App;
