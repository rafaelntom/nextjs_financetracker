import React from "react";

const DefaultButton = ({
  text,
  hoverColor = "hover:bg-secondary hover:text-secondary-light cursor-pointer hover:border-secondary",
}: {
  text: string;
  hoverColor?: string;
}) => {
  return (
    <button
      className={`btn transition-all bg-secondary-light text-lg font-medium text-primary-dark border-2  border-primary-dark  rounded px-6 py-2 text-center md:w-[250px] shadow-lg ${hoverColor} cursor-pointer font-roboto uppercase font-bold tracking-wide`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
