import React  from "react";
interface Props{
    title : string
    children : string
}
const Tab: React.FC<Props> = ({children}) => {
  return (
    <>
        {children}
    </>
);
};

Tab.defaultProps = {
}

export default Tab;