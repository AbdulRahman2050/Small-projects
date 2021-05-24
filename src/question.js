import SingleQuestion from "./Squestion";

import questions from "./qs";

const Question = () => {
  return <main className="sques">
      {questions.map((question) =>{
          const {id,title,info}= question;
       return   <SingleQuestion key={id} title={title} info={info} />
      })}
  </main>
};

export default Question;
