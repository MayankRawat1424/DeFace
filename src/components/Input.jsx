import { useRef } from "react";

const Input = ({ handleSelect }) => {
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const images = [];
    const videos = [];
    console.log(files);
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        images.push(URL.createObjectURL(file));
      }
      if (file.type.startsWith("video/")) {
        videos.push(URL.createObjectURL(file));
      }
    });

    handleSelect({ images, videos });
  };

  const onChange = (e) => {
    handleFiles(e.target.files);
    e.target.value = null; // allow re-upload same file
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => inputRef.current.click()}
      className="border-2 border-dashed border-neutral-500 hover:cursor-pointer text-center py-16 w-3/5 mx-auto rounded-lg"
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*,video/*"
        hidden
        onChange={onChange}
      />

      <p className="mb-2 text-2xl">Upload Images or Videos</p>
      <p className="text-neutral-500">Click or drag & drop files here</p>
    </div>
  );
};

export default Input;
