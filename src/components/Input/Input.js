import { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function validOrInvalidEmail() {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    const isEmail = input.match(pattern);

    setError(!isEmail);
  }

  function handleEnter(e) {
    if (e.key != "Enter") return;

    validOrInvalidEmail();
  }

  return (
    <>
      <section className="sectionInput">
        <input
          onKeyDown={handleEnter}
          onChange={(e) => setInput(e.target.value)}
          className={!error ? "input" : "invalidInput"}
          placeholder="Email Address"
        />
        <button onClick={validOrInvalidEmail} className="button">
          <img src="/images/icon-arrow.svg" />
        </button>
      </section>
      {error && <p className="invalidEmail">Please provide a valid email</p>}
    </>
  );
}

export default Input;
