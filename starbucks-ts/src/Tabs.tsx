import React, {  useState } from "react";
import {Transition} from "@headlessui/react";
import Tab from "./Tab";
import { Fragment } from "react";


interface Props{
    children: React.ReactElement[];
   //children : React.FC<TabProps>[];
    
   
}
const Tabs: React.FC<Props> = ({children}) => {

    const [selectedIndex, setSelectedIndex ] = useState(0);
    const tabwidth = 100 / children.length;

  return (
      <div>
    <div className="bg-primary-100 pb-1">
      <div className="relative  max-w-md mx-auto ">
        <div className="flex text-xl font-semibold">
          {children.map((child, index) => (
          <div className="flex-1 px-2 py-4 text-center cursor-pointer" onClick={() => setSelectedIndex(index)}>
              {child.props.title}
            <span className="text-xs text-yellow-800">★</span>
            </div> 
          ))}
          </div>
          
          <div className="absolute duration-500 ease-in-out h-1 bg-primary-400" style = {{width: tabwidth + "%", left: tabwidth * selectedIndex + "%",}} >

          </div>
        </div> 
        </div>
       
       

        <div className="relative bg-primary-200">
         
            {children.map((child,index) => (
                <Transition 
                    as = {Fragment}
                    show = {index === selectedIndex}
                    enter="transition-opacity duration-300"
                    enterFrom ="opacity-0"
                    enterTo="opacity-100"
                    entered="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                        <div className="absolute top-0 left-0 right-0  px-2 py-4 bg-primary-200">{child}</div>
                </Transition>

            ))}

          </div>
        </div>
 
);
};

Tabs.defaultProps = {
}

export default Tabs;