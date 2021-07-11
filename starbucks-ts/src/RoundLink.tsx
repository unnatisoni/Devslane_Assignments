import React from "react";
import { Popover, Transition} from '@headlessui/react'
import ConfirmationDialog from "./ConfirmationDialog"
import {Dialog} from "@headlessui/react"
import { isJsxOpeningElement } from "typescript";
import { useState } from 'react'

interface Props{
    linkURL ?  : string
    linkText ? : string
    theme ? : string
}



const RoundLink: React.FC<Props> = (props) => {

    
const themeClasses =
props.theme === "white"
  ? "text-white border-white w-max h-max"
  : "text-white border-black w-max hmax self-center bg-primary-300";
  

  return (

    <a
    {...props}

    href={props.linkURL}
    className= {
      " flex border font-semibold rounded-full tracking-tight px-4 py-1 text-10 flex-shrink-0 md:self-start lg:self-start  " + themeClasses }
    
  >
    {props.linkText}
  </a>


   
    


 
 



  
    
);

};



export default RoundLink;


/* 
  
  */

  /*

   <Dialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    className="fixed z-10   "
  />

  */