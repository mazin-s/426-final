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
    <div id="memes">
      <h1>Memes</h1>
      <br></br>
      {memes.map((meme) => (
        <div id={meme.id}>
          <h5 id={"name" + meme.id}>{"Name: " + meme.name}</h5>
          <img
            id={"img" + meme.id}
            src={meme.url}
            alt="failed to load..."
          ></img>
          <br id={"br" + meme.id}></br>
        </div>
      ))}
    </div>
  );
}
