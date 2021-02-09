import "./AddReview.css";
import { useState } from "react";

const AddReview = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dateTime = new Date();

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
        <form className="form-review" onSubmit={handleSubmit}>
          <div
            className={
              isLoading ? "form-review-loading" : "form-review-not-loading"
            }
          >
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
              cols="40"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
            <input type="submit" value="Отправить" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
