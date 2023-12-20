import React from "react";

const Title = ({ title, text }) => {
  return (
    <div className="mb-10 start:mb-14">
      <div className="text-center text-[28px] font-bold text-main-blackText mb-4 start:text-[48px] start:mb-6">
        {title}
      </div>
      <div className="text-center text-main-grayText text-base start:text-lg">
        {text}
      </div>
    </div>
  );
};

export default Title;
