// import React, { useState } from "react";

const Preview = ({ images, type, setType }) => {
  //   const [idx, setIdx] = useState(0);

  return (
    <div className="grid grid-cols-5 mx-4 mb-16">
      <div className="col-span-1 mr-2">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border px-3 py-2  w-full"
        >
          <option value="">Select Blur Type</option>
          <option value="gaussian">Gaussian Blur</option>
          <option value="pixelate">Pixelate</option>
          <option value="black">Black Box</option>
        </select>
      </div>

      <div className="col-span-4 ml-2 ">
        <p className="text-neutral-700 text-xl mb-2">Preview</p>
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
