import { useEffect, useState } from "react";
import { fetchImage } from "./fetchService";
import ImageCard from "./ImageCard";
import "./App.sass"
import ImageModal from "./ImageModal";


function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const elements = images?.map(item => {
    return <ImageCard key={item.id} url={item.url} id={item.id} showModal={(id) => {setSelectedId(id); setIsModalVisible(true)}}/>
  })

  useEffect(() => {
    fetchImage('https://boiling-refuge-66454.herokuapp.com/images').then(data => {
      setLoading(false);
      setImages(data);
    })
  }, [])

  return (
    <div>
      <ImageModal isVisible={isModalVisible} id={selectedId} closeModal={() => setIsModalVisible(false)}/>
      <div className="list">
        {loading ? <p>Loading...</p> : null}
        {elements}
      </div>
    </div>
  );
}

export default App;
