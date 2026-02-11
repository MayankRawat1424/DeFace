import { useState } from "react";

export default function MultiImageInput({ setImages, images }) {
  const [flag, setFlag] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    console.log(images);
  };

  const handleClick = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div className=" grid grid-cols-5 mx-4">
      <div className="col-span-1 mr-2">
        <button
          className="bg-amber-200 py-2 px-4 w-full  hover:bg-amber-300 hover:cursor-pointer"
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
          className="px-16 py-8 w-3xl border-2 border-neutral-500 border-dashed hover:cursor-pointer text-center rounded-sm"
        />
      </div>
    </div>
  );
}
