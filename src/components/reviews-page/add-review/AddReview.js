import "./AddReview.css";
import { useState } from "react";

const AddReview = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dateFormat = require("dateformat");
  const dateTime = dateFormat(new Date(), " dS, mmmm, yyyy, HH:MM:ss");

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = { name, review, dateTime };

    setIsLoading(true);

    fetch("http://localhost:8000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    }).then(() => {
      setIsLoading(false);
      setName("");
      setReview("");
    });
  };

  return (
    <section>
      <div className="review-container">
        <form onSubmit={handleSubmit}>
          <div
            className={
              isLoading ? "form-review-loading" : "form-review-not-loading"
            }
          >
            <div className="form-review">
              <label>Ваше имя</label>
              <input
                type="text"
                placeholder="Имя"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label>Напишите отзыв</label>
              <textarea
                rows="10"
                cols="20"
                placeholder="Ваш отзыв или предложение"
                required
                value={review}
                onChange={(event) => setReview(event.target.value)}
              />
              <input
                className="form-review-button"
                type="submit"
                value="Отправить"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
