import { FaceDetection } from "@mediapipe/face_detection";
import { useEffect, useRef } from "react";

const Blur = ({ images }) => {
  const canvasRef = useRef(images[0]);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const imageUrl = URL.createObjectURL(images[0]);
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
  }, [images]);

  return (
    <div className="grid grid-cols-5 mx-4 mb-16">
      <div className="col-span-1 mr-2">
        <button className="hover:cursor-pointer w-full">Censor Images</button>
      </div>

      <div className="col-span-4 ml-2">
        <img ref={imgRef} style={{ display: "none" }} alt="" />
        <canvas ref={canvasRef} className="w-96 h-auto" />
      </div>
    </div>
  );
};

export default Blur;
