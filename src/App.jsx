import { useState } from "react";
import Input from "./components/Input";
import PreviewGrid from "./components/PreviewGrid";
function App() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleSelect = ({ images, videos }) => {
    setImages(images);
    setVideos(videos);
  };

  return (
    <>
      <Input handleSelect={handleSelect} />
      {(images.length > 0 || videos.length > 0) && (
        <>
          <h3 className="mt-8 mb-4 text-lg font-semibold">Image Preview</h3>
          <PreviewGrid images={images} />
        </>
      )}
    </>
  );
}

export default App;
