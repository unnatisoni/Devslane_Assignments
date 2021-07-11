import React from "react";
import RoundLink from "./RoundLink"
interface Props{
}
const Header: React.FC<Props> = (props) => {
  return (
    <div className="sticky top-0 flex justify-between text-white bg-primary-400 px-4 py-2 z-10">
           <h3 className="text-13 font-bold"> Starbucks® Rewards</h3>
           <RoundLink linkText="Join in the app" linkURL="/" theme="white" />
    </div> 
);
};

Header.defaultProps = {
}

export default Header;


/* function RoundLink(props: any ) {
    const themeClasses =
      props.theme === "white"
        ? "text-white border-white"
        : "text-white border-black w-32 self-center bg-primary-300";

        */


 /* <RoundLink linkText="Join in the app" linkURL="googl.com" theme="white"></RoundLink> */