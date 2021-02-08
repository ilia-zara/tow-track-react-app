import "./Reviews.css";
import AddReview from "components/reviews-page/add-review/AddReview";
import ReviewsList from "components/reviews-page/reviews-list/ReviewsList";

function Reviews() {
  return (
    <div className="reviews-container">
      <h3>
        Оставьте свой отзыв или предложение <br /> чтобы мы могли улучшить
        качество услуг
      </h3>
      <ReviewsList />
      <AddReview />
    </div>
  );
}

export default Reviews;
