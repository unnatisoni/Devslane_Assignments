import React, { AnchorHTMLAttributes } from "react";
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    imglink : string;
    headingText : string;
    paraText : string;
    size : string;
    className ? : string;
}
const Steps: React.FC<Props> = (props) => {

 /* const SizeClasses =
  props.size === "h-12 "
    ? "h-12 "
    : "h-28";
*/
    
  return (
       
        
          <div className="flex flex-row md:flex-col lg:flex-col  p-3 text-gray md:justify-center w-1/3  lg:gap-5 md:gap-5 lg:px-20 md:px-6  ">
            <img
              
             className="w-1/12 md:self-center lg:self-center"
              src={props.imglink}
            ></img>
            <div className="flex flex-col pl-3 text-left md:text-center lg:text-center   ">
              <h2 className="font-semibold text-base md:text-lg lg:text-lg">
                {props.headingText}
              </h2>
              <p className="pt-4 text-sm md:text-base lg:text-base">{props.paraText}</p>
              
            </div>
          </div>
);
};

Steps.defaultProps = {
}

export default Steps;