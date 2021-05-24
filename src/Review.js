import { useState } from "react";
import reviews from "./data";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  return (
    <main className="ms">
      <h1>Review</h1>

      <div className="review">
        <img src={image} alt={name} />
        <h4>{job}</h4>
        <p>{text}</p>
      </div>
      <>
        <span className="btn">
          <button
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            <IoArrowBack />
          </button>
          <button
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            <IoArrowForward />
          </button>
        </span>
      </>
    </main>
  );
};

export default Review;
