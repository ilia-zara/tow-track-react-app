import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, phone };

    setIsLoading(true);

    fetch("http://localhost:8000/callBackTo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }).then(() => {
      console.log("new userdata added");
      setIsLoading(false);
    });
  };

  return (
    <section>
      <h3>ОСТАЛИСЬ ВОПРОСЫ? МЫ САМИ ПЕРЕЗВОНИМ!</h3>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className={isLoading ? "form-loading" : "not-loading"}>
            <label>Ваше имя*</label>
            <input
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label>Ваш телефон*</label>
            <input
              type="number"
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
