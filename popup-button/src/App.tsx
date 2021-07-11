import React, {Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import ConfirmationPopUp from "./ConfirmationPopUp";
import {
  Popover,
  Transition
} from "@headlessui/react";

function App() {

  return (
    <div className="bg-blue-400 h-screen pt-36 App ">
      <div className="flex justify-center  ">
        <Popover>
          {({ open }) => (
            <div>
              <Popover.Button className=" px-7 py-2 bg-red-600 text-white">
                {" "}
                Close this window
              </Popover.Button>

              <Popover.Overlay
                className={
                  open
                    ? " opacity-40 fixed inset-0 bg-black"
                    : "opacity-0"
                }
              />
           <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

                <Popover.Panel className="px-2 relative z-10  max-w-sm mt-3 ">
                <div className="flex items-center justify-center">
                <ConfirmationPopUp
                  title="Are You Sure ?"
                  description="Do you really want to close this window ?  "
                  cancelText="Cancel"
                  okText="Close"
                />
                </div>
                </Popover.Panel>
              </Transition>
             
            </div>
            
          )}
          
        </Popover>
        </div>
         
      </div>
   
  );
}

export default App;
