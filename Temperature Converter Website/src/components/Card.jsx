import "./Card.css";
import { useState, useEffect } from "react";

const Card = () => {
  const [degrees, setDegrees] = useState(0);
  const [type, setType] = useState("");
  const [result, setResult] = useState("");

  function conversion(degrees, type) {
    if (type === "") {
      setResult(`0`);
    } else if (type === "Celsius") {
      setResult(`${((degrees * 9) / 5 + 32).toFixed(4)} °F`);
    } else {
      setResult(`${(((degrees - 32) * 5) / 9).toFixed(4)} °C`);
    }
  }

  return (
    <section className="card">
      <form action="">
        <div className="inputs">
          <div className="input1">
            <label htmlFor="degrees">Degrees</label>
            <input
              type="number"
              id="degrees"
              name="degrees"
              value={degrees}
              onChange={(e) => setDegrees(e.target.value)}
            />
          </div>
          <div className="input2">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={(e) => setType(e.target.value)}
            >
              <option value=""></option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Celsius">Celsius</option>
            </select>
          </div>
          <input
            type="submit"
            value="Convert"
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              conversion(degrees, type);
            }}
          />
        </div>
      </form>
      <div className="result">
        <label htmlFor="result">Result</label>
        <input type="text" id="result" name="result" disabled value={result} />
      </div>
    </section>
  );
};

export default Card;
