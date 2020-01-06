import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setIsClicked(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {isClicked}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
