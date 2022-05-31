import React, { MouseEventHandler } from "react";

interface Props {
  onClick: () => void;
  radius: string;
  height: string;
  width: string;
  button_content: string;
  onHold?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<Props> = ({
  radius,
  height,
  width,
  onClick,
  button_content,
  
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: radius,
        height,
        width,
      }}
    >
      {button_content}
    </button>
  );
};

export default CustomButton;
