import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";
import {XIcon } from "@heroicons/react/outline";



interface Props{
    open ? : boolean
    title : string
    description ? : string
    okText ? : string
    cancelText ? : string
    

}
const ConfirmationDialog: React.FC<Props> = ({title, description, okText, cancelText}) => {
  return (
    <div className="flex justify-center ">
    <div className="flex flex-col p-5 bg-white border mb-20 w-96  gap-2 text-center shadow-2xl ">
     <XIcon className="self-end  h-7 place-self-end"></XIcon>
     <ExclamationIcon className="text-primary-400 w-full h-28"></ExclamationIcon>
      <h2 className="text-2xl font-bold pb-3"> {title} </h2>
     {description && <p className="text-base"> {description} </p>} 
     <div className="flex flex-row justify-around py-5">
         <button className="bg-primary-400 max-w-max px-4 py-1 rounded-sm text-white  hover:bg-primary-300 " >{cancelText}</button>
         <button className="bg-primary-400 max-w-max px-4 py-1 rounded-sm text-white  hover:bg-primary-300 " >{okText}</button>
     </div>
    </div>
    </div>
);
};

ConfirmationDialog.defaultProps = {
    cancelText : "Delete",
    okText : "ok"

}

export default ConfirmationDialog;


//onClose: (open: false) => void;   onClose : setOpen
// <button onClick={() => setOpen(false)}></button>