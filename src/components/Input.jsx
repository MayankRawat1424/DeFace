import { useState } from "react";

export default function MultiImageInput({ setImages, images }) {
  const [flag, setFlag] = useState(true);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    console.log(images);
  };

  const handleClick = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div className="bg-amber-200 grid grid-cols-5 px-4 pt-16 pb-16">
      <div className="col-span-1 mr-2 border-neutral-700 border-2">
        <button
          className="bg-neutral-800 text-white py-2 px-4 w-full  hover:shadow-lg hover:cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        >
          Total Images: {images.length}
        </button>

        {flag && (
          <div className="overflow-scroll">
            {images.map((file, index) => (
              <p className="mx-2 my-2 text-sm" key={index}>
                <strong>{index + 1} : </strong>
                {file.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-4 ml-2 flex justify-center h-fit">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="px-16 py-8 w-3xl border-2 border-neutral-500 border-dashed hover:cursor-pointer text-center "
        />
      </div>
    </div>
  );
}
