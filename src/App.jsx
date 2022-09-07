import { useEffect, useState } from "react";
import { fetchImages } from "./fetchService";
import ImageCard from "./ImageCard";
import "./App.sass"


function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const elements = images?.map(item => {
    return <ImageCard key={item.id} url={item.url}/>
  })

  useEffect(() => {
    fetchImages('https://boiling-refuge-66454.herokuapp.com/images').then(data => {
      setLoading(false);
      setImages(data);
    })
  }, [])
  
  return (
   <div className="list">
    {loading ? <p>Loading...</p> : null}
    {elements}
   </div>
  );
}

export default App;
