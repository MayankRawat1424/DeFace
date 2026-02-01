export default function PreviewGrid({ images }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map(({ file, preview }, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
        >
          <img
            src={preview}
            alt={file.name}
            className="h-40 w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 text-xs text-white truncate">
            {file.name}
          </div>
        </div>
      ))}
    </div>
  );
}
