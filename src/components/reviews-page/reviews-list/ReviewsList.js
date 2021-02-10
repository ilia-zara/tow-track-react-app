import "./ReviewsList.css";
import ReviewsListItem from "components/reviews-page/reviews-list/reviews-list-item/ReviewsListItem";
import { useState, useEffect } from "react";

const ReviewsList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const abortCount = new AbortController();

    fetch("http://localhost:8000/reviews", { signal: abortCount.signal })
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          if (error.name === "AbortError") {
            console.log(error.message);
          } else {
            setIsLoaded(true);
            setError(error);
          }
        }
      );
    return () => abortCount.abort();
  }, []);

  const allReviews = items.map((item) => (
    <ReviewsListItem
      key={item.id}
      name={item.name}
      review={item.review}
      dateTime={item.dateTime}
    />
  ));

  if (error) {
    return alert("Ошибка загрузки данных");
  } else if (!isLoaded) {
    return <div className="reviews-list-loading"></div>;
  } else {
    return (
      <section>
        <ul className="reviews-list">{allReviews}</ul>
      </section>
    );
  }
};

export default ReviewsList;
