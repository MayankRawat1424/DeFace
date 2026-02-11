import { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import Preview from "./components/Preview";

function App() {
  const [images, setImages] = useState([]);

  return (
    <>
      <Header />
      <Preview />
      <Input images={images} setImages={setImages} />
    </>
  );
}

export default App;
