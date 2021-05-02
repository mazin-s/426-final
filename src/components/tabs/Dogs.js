import React, { useState, useEffect } from "react";
import axios from "axios";

export function Dogs() {
  const [dog, setDog] = useState("");
  const [updateDog, setUpdateDog] = useState(true);
  async function getDog() {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDog(result.data.message);
    return result.data.message;
  }
  useEffect(() => {
    getDog();
  }, [updateDog]);
  return (
    <div>
      <h1>Dogs</h1>
      <br></br>
      <img src={dog} alt={"loading..."}></img>
      <br></br>
      <button
        style={{ width: "200px" }}
        onClick={function () {
          setUpdateDog(!updateDog);
        }}
      >
        New Dog
      </button>
    </div>
  );
}
