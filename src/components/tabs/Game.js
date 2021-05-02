import "./Game.css";
import mole from "./mole.png";
import React, { useState } from "react";

export function Game() {
  const [state, setState] = useState("notPlaying"); // playing....notPlaying
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [index, setIndex] = useState(Math.floor(16 * Math.random()));
  const [timer, setTimer] = useState();

  function holeClicked(i) {
    if (state === "notPlaying") {
      return;
    }

    if (i === index) {
      setScore(score + 1);
      setIndex(randomIndex());
    } else {
      if (lives === 1) {
        alert("Game Over!\nYou can keep playing for fun or restart game");
      }
      setLives(lives - 1);
    }
  }

  function randomIndex() {
    return Math.floor(16 * Math.random());
  }

  function changeIndex() {
    setIndex(randomIndex());
  }

  function startGame() {
    setState("playing");
    const timer = setInterval(changeIndex, 1500);
    setScore(0);
    setLives(3);
    setIndex(randomIndex());
    setTimer(timer);
  }

  function endGame() {
    setState("notPlaying");
    clearInterval(timer);
  }

  return (
    <div className="gameBoard" style={{ backgroundColor: "lightgreen" }}>
      <h1>Whack a Mole</h1>
      <br></br>
      <button onClick={startGame}>Start Whacking</button>
      <button onClick={endGame}>End Whacking</button>
      <p>{"Score: " + score + "| Lives: " + lives}</p>
      <div>
        {Array(4)
          .fill()
          .map((_, i) => {
            if (index === i + 0) {
              return (
                <div id={"hole" + (i + 0)} className="container">
                  <img
                    id={"holeImage" + (i + 0)}
                    className="moleImage"
                    src={mole}
                    alt="mole"
                    onClick={() => holeClicked(i + 0)}
                  />
                </div>
              );
            } else {
              return (
                <div id={"hole" + (i + 0)} className="container">
                  <div
                    id={"holeDiv" + (i + 0)}
                    className="hole"
                    onClick={() => holeClicked(i + 0)}
                  ></div>
                </div>
              );
            }
          })}
        <br />
        {Array(4)
          .fill()
          .map((_, i) => {
            if (index === i + 4) {
              return (
                <div id={"hole" + (i + 4)} className="container">
                  <img
                    id={"holeImage" + (i + 4)}
                    className="moleImage"
                    src={mole}
                    alt="mole"
                    onClick={() => holeClicked(i + 4)}
                  />
                </div>
              );
            } else {
              return (
                <div id={"hole" + (i + 4)} className="container">
                  <div
                    id={"holeDiv" + (i + 4)}
                    className="hole"
                    onClick={() => holeClicked(i + 0)}
                  ></div>
                </div>
              );
            }
          })}
        <br />
        {Array(4)
          .fill()
          .map((_, i) => {
            if (index === i + 8) {
              return (
                <div id={"hole" + (i + 8)} className="container">
                  <img
                    id={"holeImage" + (i + 8)}
                    className="moleImage"
                    src={mole}
                    alt="mole"
                    onClick={() => holeClicked(i + 8)}
                  />
                </div>
              );
            } else {
              return (
                <div id={"hole" + (i + 8)} className="container">
                  <div
                    id={"holeDiv" + (i + 8)}
                    className="hole"
                    onClick={() => holeClicked(i + 0)}
                  ></div>
                </div>
              );
            }
          })}
        <br />
        {Array(4)
          .fill()
          .map((_, i) => {
            if (index === i + 12) {
              return (
                <div id={"hole" + (i + 12)} className="container">
                  <img
                    id={"holeImage" + (i + 12)}
                    className="moleImage"
                    src={mole}
                    alt="mole"
                    onClick={() => holeClicked(i + 12)}
                  />
                </div>
              );
            } else {
              return (
                <div id={"hole" + (i + 12)} className="container">
                  <div
                    id={"holeDiv" + (i + 12)}
                    className="hole"
                    onClick={() => holeClicked(i + 12)}
                  ></div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
