import "./ReviewsList.css";
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
  }, [items]);

  if (error) {
    return alert("Ошибка загрузки данных");
  } else if (!isLoaded) {
    return <div className="reviews-list-loading"></div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.review} {item.dateTime}
          </li>
        ))}
      </ul>
    );
  }
};

export default ReviewsList;