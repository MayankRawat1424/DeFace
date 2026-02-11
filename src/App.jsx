import { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Blur from "./components/Blur";

function App() {
  const [images, setImages] = useState([]);
  const [type, setType] = useState("");

  return (
    <>
      <Header />
      <Blur images={images} />
      {images.length > 0 && (
        <Preview images={images} type={type} setType={setType} />
      )}

      <Input images={images} setImages={setImages} />
    </>
  );
}

export default App;
