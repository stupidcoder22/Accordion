import React, { useState } from "react";
const Question = ({ title, info }) => {
  const [showinfo, setshowinfo] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setshowinfo(!showinfo)}>
          {showinfo ? "➖" : "➕"}
        </button>
      </header>
      {showinfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
