import React from "react";
import RoundLink from "./RoundLink"


interface Props{
}
const HeroSection: React.FC<Props> = (props) => {
  return (
    <div>

        
    <div className="aspect-w-3 aspect-h-4 mb-72 md:aspect-w-12 md:aspect-h-7 lg:aspect-w-13 lg:aspect-h-7">
        <div className=" bg-cover bg-primary-200 bg-star md:bg-BigStar lg:bg-BigStar lg:bg-center  md:bg-center">
        <div className="flex flex-col justify-center  pl-6.4 pr-6.4 pt-12 pb-12 text-center lg:items-start lg:py-48 md:items-start md:py-24 md:gap-4 lg:gap-4" >
        <h1 className="font-semibold text-xl md:text-4xl lg:text-4xl">FREE COFFEE <br /> IS A TAP AWAY</h1>
        <p className="pt-3 pb-5 md:text-lg lg:text-xl">Join now to start earning Rewards.</p>
        
        <RoundLink linkURL= "/" linkText = "Join in the app" theme = "green" />
        <a className="underline hover:no-underline mt-3 lg:hidden md:hidden">Or join online</a>
        <p className="hidden lg:block md:block md:text-lg lg:text-xl"> Or <a className="underline hover:no-underline mt-3 ">join in the app </a> for the best experience</p>
      </div>
      
      
</div>


</div>

    
     
        
    </div>
);
};

HeroSection.defaultProps = {
}

export default HeroSection;