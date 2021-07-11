import React from "react";
import TopHeading from "./TopHeading"
interface Props{
}
const Form: React.FC<Props> = (props) => {
  return (
    <div>
    <TopHeading
      align="text-left"
      getHead="Star Codes"
      getPara="Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account."
    />
    <form className="pb-5 px-2 mb-2">
      <input
        placeholder="Enter your Star Code"
        className="w-full border border-black rounded-lg h-5 px-6.4 py-5 mb-5"
      />
      <button className="border border-black px-4 py-1 rounded-3xl self-end">
        submit
      </button>
    </form>
    <p>
      Have a receipt but don't have a code?
    </p>
    <p>
      Go to
      <a className="text-primary-300 underline hover:no-underline">
        starbucks-stars.com
      </a>
      opens in new window to upload your
      receipt and collect your Stars.
    </p>
    </div>
);
};

Form.defaultProps = {
}

export default Form;