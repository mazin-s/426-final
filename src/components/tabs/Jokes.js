import React, { useState, useEffect } from "react";
import axios from "axios";

export function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [updateJokes, setUpdateJokes] = useState(true);
  async function getJokes() {
    const result = await axios.get(
      "https://official-joke-api.appspot.com/jokes/ten"
    );
    setJokes(result.data);
    return result.data;
  }
  useEffect(() => {
    getJokes();
  }, [updateJokes]);

  return (
    <div id="jokes">
      <h1>Jokes</h1>
      <br></br>
      {jokes.map((joke) => (
        <div id={joke.id}>
          <h5 id={"type" + joke.id}>{"Type: " + joke.type}</h5>
          <h5 id={"setup" + joke.id}>{"Setup: " + joke.setup}</h5>
          <h5 id={"punchLine" + joke.id}>{"Punchline: " + joke.punchline}</h5>
          <br id={"br" + joke.id}></br>
        </div>
      ))}
      <button
        style={{ width: "200px" }}
        onClick={function () {
          setUpdateJokes(!updateJokes);
        }}
      >
        New Jokes
      </button>
    </div>
  );
}
