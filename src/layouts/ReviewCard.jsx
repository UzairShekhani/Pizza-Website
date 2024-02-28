import React from "react";

const ReviewCard = ({ img, name }) => {
  return (
    <div className=" bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className=" text-lightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          commodi quidem id, ipsam natus adipisci, dignissimos nobis quas
          necessitatibus eos repellat ullam, voluptate animi cupiditate
          inventore ipsum esse a mollitia?
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={img} alt="img" />
        <h3 className=" font-semibold ">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
