import { useEffect, useMemo } from "react";

export default function ImagePreviewGrid({ images }) {
  const filesWithPreview = useMemo(
    () =>
      images.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    [images],
  );

  useEffect(() => {
    return () => {
      filesWithPreview.forEach((item) => URL.revokeObjectURL(item.preview));
    };
  }, [filesWithPreview]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {filesWithPreview.map(({ file, preview }, index) => (
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
