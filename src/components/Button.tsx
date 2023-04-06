import React from "react";

type Props = {
  buttonText: string;
};

const Button = ({ buttonText }: Props) => {
  return (
    <button className="bg-secondary w-fit text-sm font-bold py-2 px-4 hover:scale-95 transition-all duration-300 rounded-lg">
      {buttonText}
    </button>
  );
};

export default Button;
