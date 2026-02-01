import React, { useState, useMemo } from "react";

const FindFaces = ({ images }) => {
  const [idx, setIdx] = useState(0);

  const imageSrc = useMemo(
    () => URL.createObjectURL(images[idx]),
    [images, idx],
  );

  if (!images || images.length === 0) return null;
  return (
    <div>
      <img src={imageSrc} alt="" className="max-h-7vh" />
      <button
        onClick={() => {
          setIdx((idx + 1) % images.length);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default FindFaces;
