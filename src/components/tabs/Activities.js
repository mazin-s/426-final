import React, { useState, useEffect } from "react";
import axios from "axios";

export function Activities() {
  const [suggestion, setSuggestion] = useState("");
  const [updateSuggestion, setUpdateSuggestion] = useState(true);
  async function getSuggesion() {
    const result = await axios.get("https://www.boredapi.com/api/activity");
    setSuggestion(result.data);
  }
  useEffect(() => {
    getSuggesion();
  }, [updateSuggestion]);
  return (
    <div>
      <h1>Activities</h1>
      <br></br>
      <h3>{"Activity: " + suggestion.activity}</h3>
      <h3>{"Type: " + suggestion.type}</h3>
      <h3>{"Participants: " + suggestion.participants}</h3>
      <h3>{"Type: " + suggestion.price}</h3>
      <h3>{"Accessibility: " + suggestion.accessibility}</h3>
      <button
        style={{ width: "200px" }}
        onClick={function () {
          setUpdateSuggestion(!updateSuggestion);
        }}
      >
        New Suggestion
      </button>
    </div>
  );
}
