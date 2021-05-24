import { useState } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";


const SingleQuestion = ({ title, info }) => {
  const [reveal, setReveal] = useState(false);

  return (
    <article>
      <header>
        {title}
        <button className="btnq"
          onClick={() => {
            setReveal(!reveal);
          }}
        >
          {reveal ? <BiMinusCircle /> : <BiPlusCircle />}
        </button>
      </header>
      <p> {reveal && info}</p>

    </article>
  );
};

export default SingleQuestion;

