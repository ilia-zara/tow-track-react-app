import "./ReviewsListItem.css";

const ReviewsListItem = ({ name, review, dateTime }) => {
  return (
    <div className="reviews-item-container">
      <div className="reviews-item-user">
        <span>User: {name}</span>
        <span>{dateTime}</span>
      </div>
      <div className="reviews-item-text">{review}</div>
    </div>
  );
};

export default ReviewsListItem;
