import React, { useState } from "react";
import SingleQuestion from "./Question";
import data from "./data";
function App() {
  const [questions, setquestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and Answer about login</h3>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
