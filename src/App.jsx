import { useEffect, useState } from "react";
import { fetchImage } from "./fetchService";
import ImageCard from "./components/ImageCard";
import ImageModal from "./components/ImageModal";
import "./App.sass"


function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false);

  function closeModal(e) {
    if (e.target.className === "image-modal__bg")
      setIsModalVisible(false)
  }

  useEffect(() => {
    fetchImage('https://boiling-refuge-66454.herokuapp.com/images').then(data => {
      setLoading(false);
      setImages(data);
    })
  }, [])

  return (
    <div>
      <ImageModal isVisible={isModalVisible} id={selectedId} closeModal={closeModal}/>
      <div className="list">
        {loading ? <p>Loading...</p> : null}
        {images ? images.map(item =>  <ImageCard key={item.id} url={item.url} id={item.id} showModal={(id) => {setSelectedId(id); setIsModalVisible(true)}}/>) : null}
      </div>
    </div>
  );
}

export default App;
