import React, { useState, useEffect } from "react";
import axios from "axios";

export function Names() {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);
  const [updateName, setUpdateName] = useState(true);
  async function getName() {
    let name = document.querySelector("#nameTextArea").value;

    if (name === "") {
      name = "michael";
    }
    const result = await axios.get("https://api.nationalize.io/?name=" + name);
    setName(result.data);
    setCountries(result.data.country);
    document.querySelector("#nameTextArea").value = "";
    return result.data;
  }
  useEffect(() => {
    getName(document.querySelector("#nameTextArea"));
  }, [updateName]);
  return (
    <div>
      <h1>Names</h1>
      <br></br>
      <form>
        <textarea
          id="nameTextArea"
          placeholder="Enter a name..."
          rows="5"
          cols="33"
        ></textarea>
      </form>
      <button
        onClick={function () {
          setUpdateName(!updateName);
        }}
      >
        New Search
      </button>
      <br></br>
      <br></br>
      <h4>{"Name: " + name.name}</h4>
      {countries.map((c) => (
        <div id={c.country_id}>
          <h5 id={"country" + c.country_id}>{"Country: " + c.country_id}</h5>
          <h5 id={"probability" + c.country_id}>
            {"Probability: " + (c.probability * 100).toFixed(2) + "%"}
          </h5>
          <br id={"br" + c.country_id}></br>
        </div>
      ))}
    </div>
  );
}
