import "./Form.css";
import load from "media/load.gif";
import { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [phoneError, setPhoneError] = useState("Телефон не может быть пустым");
  const [formValid, setFormValid] = useState(false);

  const dateFormat = require("dateformat");
  const dateTime = dateFormat(new Date(), " dS, mmmm, yyyy, HH:MM:ss");

  useEffect(() => {
    if (nameError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, phoneError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, phone, dateTime };

    setIsLoading(true);

    fetch("http://localhost:8000/callBackTo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then(() => {
      console.log("new userdata added");
      setIsLoading(false);
      setName("");
      setPhone("");
    });
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      default:
        break;
    }
  };

  const nameHandler = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 2) {
      setNameError("Имя не должно быть короче 2 символов");
    } else {
      setNameError("");
    }
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
    if (event.target.value.length !== 11) {
      setPhoneError("Номер должен содержать 11 цифр");

      if (!event.target.value) {
        setPhoneError("Номер не может быть пустым");
      }
    } else {
      setPhoneError("");
    }
  };

  return (
    <section>
      <h3>ОСТАЛИСЬ ВОПРОСЫ? МЫ САМИ ПЕРЕЗВОНИМ!</h3>
      <div className="form-callback-container">
        <form className="form-callback" onSubmit={handleSubmit}>
          <div
            className={
              isLoading ? "form-callback-loading" : "form-callback-not-loading"
            }
          >
            <img src={load} alt="Загрузка" />
          </div>
          <label>*Ваше имя</label>
          <input
            type="text"
            placeholder="Имя"
            name="name"
            value={name}
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => nameHandler(event)}
          />
          {nameDirty && nameError && (
            <div className="form-callback-error">{nameError}</div>
          )}

          <label>*Ваш телефон</label>
          <input
            type="number"
            placeholder="8 (__) ___ __ __"
            name="phone"
            value={phone}
            onChange={(event) => phoneHandler(event)}
            onBlur={(event) => blurHandler(event)}
          />
          {phoneDirty && phoneError && (
            <div className="form-callback-error">{phoneError}</div>
          )}
          <div className="form-callback-buttons">
            <input
              disabled={!formValid}
              className="form-callback-submit-button"
              type="submit"
              value="Отправить"
            />
            <input
              className="form-callback-clear-button"
              type="button"
              value="Очистить"
              onClick={() => setName("") || setPhone("")}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
