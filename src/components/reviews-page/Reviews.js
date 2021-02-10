import "./Reviews.css";
import Footer from "components/footer/Footer";
import AddReview from "components/reviews-page/add-review/AddReview";
import ReviewsList from "components/reviews-page/reviews-list/ReviewsList";
import ClickToCall from "components/click-to-call/ClickToCall";

function Reviews() {
  return (
    <div className="reviews-container">
      <h3>
        Оставьте свой отзыв или предложение <br /> чтобы мы могли улучшить
        качество услуг
      </h3>
      <ReviewsList />
      <AddReview />
      <ClickToCall />
      <Footer />
    </div>
  );
}

export default Reviews;
