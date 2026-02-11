// import React, { useState } from "react";

const Preview = ({ images }) => {
  //   const [idx, setIdx] = useState(0);

  return (
    <div className="grid grid-cols-5 px-4 pb-16 pt-8 bg-neutral-100">
      <div className="col-span-1 mr-2"></div>

      <div className="col-span-5 ml-2 ">
        <p className="text-neutral-700 text-lg mb-2">Preview</p>
        <div className="flex gap-4 overflow-scroll">
          {images.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-32 h-32 object-contain rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
