import { FaceDetection } from "@mediapipe/face_detection";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Blur = ({ images }) => {
  const canvasRef = useRef(images[0]);
  const imgRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    if (!images || images.length === 0) return;

    const imageUrl = URL.createObjectURL(images[idx]);
    imgRef.current.src = imageUrl;

    const faceDetection = new FaceDetection({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    });

    faceDetection.setOptions({
      model: "short",
      minDetectionConfidence: 0.5,
    });

    faceDetection.onResults((results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = imgRef.current;

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      results.detections?.forEach((detection) => {
        const box = detection.boundingBox;

        const x = box.xCenter * canvas.width - (box.width * canvas.width) / 2;
        const y =
          box.yCenter * canvas.height - (box.height * canvas.height) / 2;
        const w = box.width * canvas.width;
        const h = box.height * canvas.height;

        // Black censor
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, w, h);
      });
    });

    imgRef.current.onload = async () => {
      await faceDetection.send({ image: imgRef.current });
    };

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [images, idx]);

  return (
    <div className="grid grid-cols-5 mx-4 mb-16">
      <div className="col-span-1 mr-2">
        <button className="hover:cursor-pointer w-full">Censor Images</button>
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
        <div className="flex justify-center">
          <button
            className="hover:cursor-pointer bg-neutral-200 w-16 rounded-l-lg hover:bg-neutral-300"
            onClick={() => {
              setIdx((idx - 1) % images.length);
            }}
          >
            <FaChevronLeft className="w-full" />
          </button>
          <img ref={imgRef} style={{ display: "none" }} alt="" />
          <canvas
            ref={canvasRef}
            className="w-120 h-96  border-t-2 border-b-2 object-contain border-neutral-200"
          />
          <button
            className="hover:cursor-pointer bg-neutral-200 w-16 rounded-r-lg hover:bg-neutral-300"
            onClick={() => {
              setIdx((idx + 1) % images.length);
            }}
          >
            <FaChevronRight className="w-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blur;
