import React, { useState, useEffect } from "react";
import axios from "axios";

export function Memes() {
  const [memes, setMemes] = useState([]);
  const [updateMemes, setUpdateMemes] = useState(true);
  async function getMemes() {
    const result = await axios.get("https://api.imgflip.com/get_memes");
    setMemes(result.data.data.memes);
    return result.data.data.memes;
  }
  useEffect(() => {
    getMemes();
  }, [updateMemes]);
  return (
    <div id="jokes">
      <h1>Memes</h1>
      <br></br>
      {memes.map((meme) => (
        <div id={meme.id}>
          <h5>{"Name: " + meme.name}</h5>
          <img src={meme.url}></img>
          <br></br>
        </div>
      ))}
    </div>
  );
}
