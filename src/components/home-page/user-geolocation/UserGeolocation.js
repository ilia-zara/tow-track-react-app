import React, { useState } from "react";
import "./UserGeolocation.css";

const UserGeolocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const dateTime = new Date();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handleLocationError
      );
    } else {
      alert("Этот браузер не поддерживает геолокацию");
    }
  };

  const getCoordinates = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

    getUserAddress(position.coords.latitude, position.coords.longitude);

    const userLocationData = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      dateTime,
    };

    fetch("http://localhost:8000/userLocation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLocationData),
    }).then(() => {
      console.log("new userLocationData added");
    });
  };

  const getUserAddress = (latitude, longitude) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=AIzaSyAN5jMFksQDzva5ZxBVNUQF6uZ8OuIrrM0`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserAddress(data.results[0].formatted_address);
      })
      .catch((error) => alert(error));
  };

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Пользователь отклонил запрос на геолокацию.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Информация о местоположении недоступна.");
        break;
      case error.TIMEOUT:
        alert(
          "Время ожидания запроса на получение местоположения пользователя истекло."
        );
        break;
      case error.UNKNOWN_ERROR:
        alert("Произошла неизвестная ошибка.");
        break;
      default:
        alert("Произошла неизвестная ошибка.");
    }
  };

  return (
    <div className="geolocation-container">
      <h3>
        Включите геолокацию на вашем устройстве, чтобы мы могли быстрее Вас
        найти
      </h3>
      <button onClick={getLocation}>Найти меня</button>
      <p>Широта: {latitude}</p>
      <p>Долгота: {longitude}</p>
      <p>Ваш адрес: {userAddress}</p>
      <div className="map-container">
        {latitude && longitude ? (
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=500x400&sensor=false&markers=color:red%7C${latitude},${longitude}&key=AIzaSyAN5jMFksQDzva5ZxBVNUQF6uZ8OuIrrM0`}
            alt="Google map"
          />
        ) : null}
      </div>
    </div>
  );
};

export default UserGeolocation;
