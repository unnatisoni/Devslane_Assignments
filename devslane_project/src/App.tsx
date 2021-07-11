import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import User_detail from "./User_detail";

function App() {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState(
    "User-Detail"
  );
  return (
    <div className="flex pt-12 gap-6 flex-col  items-center bg-indigo-50 pb-20">
      <button
        className=" w-max px-6 py-1 rounded-2xl bg-green-800 text-white"
        onClick={() => setTitle("Top Performing")}
      >
        {" "}
        Change title{" "}
      </button>
      <User_detail page={page} title={title} />
      <button
        className=" w-max px-6 py-1 rounded-2xl bg-green-800 text-white text-left"
        onClick={() => setPage(page + 1)}
      >
        Next{" "}
      </button>
    </div>
  );
}

export default App;
