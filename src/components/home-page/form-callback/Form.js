import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dateTime = new Date();

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

  return (
    <section>
      <h3>ОСТАЛИСЬ ВОПРОСЫ? МЫ САМИ ПЕРЕЗВОНИМ!</h3>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className={isLoading ? "form-loading" : "not-loading"}>
            <label>*Ваше имя</label>
            <input
              type="text"
              placeholder="Имя"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label>*Ваш телефон*</label>
            <input
              type="number"
              placeholder="+375 (__) ___ __ __"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <div className="form-buttons">
              <input type="submit" value="Отправить" />
              <input
                type="button"
                value="Очистить"
                onClick={() => setName("") || setPhone("")}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
