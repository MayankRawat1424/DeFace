import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-5 px-4 bg-amber-200 py-4 items-center mb-16">
      <div className="col-span-1 mr-2">
        <h1 className="font-mono text-2xl underline">deFace</h1>
      </div>
      <div className="col-span-4 ml-2 flex justify-between text-center items-center">
        <p className="text-neutral-700 text-sm">Face Censoring App</p>
        <div className="text-sm flex gap-4">
          <a
            className=" hover:underline"
            href="https://github.com/MayankRawat1424/DeFace"
            target="_blank"
          >
            Git Repository
          </a>
          <a
            className=" hover:underline"
            href="https://www.mayankrawat.info/"
            target="_blank"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
