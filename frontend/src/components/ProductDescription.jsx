import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="test-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum
          quaerat asperiores perspiciatis. Quas harum aperiam consequatur, nisi
          veniam nam ex amet, architecto dolore ullam dolores odit placeat
          ducimus quia?
        </p>
        <p className="test-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          odio provident dolores voluptatum necessitatibus eum nobis aperiam
          odit sit totam minus nostrum dolore aut dicta, quae, autem recusandae
          soluta harum!
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
