import React from "react";
interface Props{
    getHead : string
    getPara : string
    align : string
}
const TopHeading: React.FC<Props> = (props) => {
    const AlignClasses =
  props.align === "text-center"
    ? "text-center justify-center p-2"
    : "text-left";
  return (
    <div
      className={
        "  flex flex-col text-gray mb-7 " + AlignClasses
      }
    >
      <h2 className="text-xl font-semibold">
        {props.getHead}
      </h2>
      <p className="pt-6.4 text-sm ">
        {props.getPara}
      </p>
    </div>
);
};

TopHeading.defaultProps = {
}

export default TopHeading;