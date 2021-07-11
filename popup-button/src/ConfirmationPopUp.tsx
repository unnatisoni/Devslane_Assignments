import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { isJsxSelfClosingElement, isOptionalChain } from "typescript";

interface Props {
  open?: boolean;
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
}
const ConfirmationPopUp: React.FC<Props> = ({
  title,
  description,
  okText,
  cancelText,
}) => {
  return (
    <div >
      <div className="flex flex-col p-5 bg-white border  text-center shadow-2xl  ">
        <XIcon className="self-end  h-7 place-self-end "></XIcon>
        <ExclamationIcon className="text-primary-400 h-28 text-red-600"></ExclamationIcon>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold pb-3 text-gray-800">
          {" "}
          {title}{" "}
        </h2>
        {description && (
          <p className="text-base text-gray-600">
            {" "}
            {description}{" "}
          </p>
        )}
        <div className="flex flex-row justify-around py-5 gap-2">
          <button
            className="bg-red-700 max-w-max px-4 py-1 rounded-sm text-white  hover:bg-gray-500 "
            onClick={() => ""}
          >
            {okText}
          </button>
          <button
            className="bg-red-700 max-w-max px-4 py-1 rounded-sm text-white  hover:bg-gray-500 "
            onClick={() =>
             ""
            }
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmationPopUp.defaultProps = {
  cancelText: "Delete",
  okText: "ok",
};

export default ConfirmationPopUp;
