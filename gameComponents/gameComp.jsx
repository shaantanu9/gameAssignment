import { useState, useEffect, useRef } from "react";
import React from "react";

const GameComp = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [numberClicks, setNumberClicks] = useState(0);
  const [showText, setShowText] = useState(false);

  const [potPosition, setPotPosition] = useState({ x: 0, y: 0 });

  const [lastClick, setLastClick] = useState({ x: 0, y: 0 });
  const [currentClick, setCurrentClick] = useState({ x: 0, y: 0 });
  const [newClickDiff, setNewClickDiff] = useState({ x: 0, y: 0 });
  const [lastClickDiff, setLastClickDiff] = useState({ x: 0, y: 0 });

  const [nearOrFar, setNearOrFar] = useState("far");

  const handleMouseMove = (e) => {
    // get mouse position
    let x = e.clientX; // Get the horizontal coordinate
    let y = e.clientY; // Get the vertical coordinate
    let coors = "X coords: " + x + ", Y coords: " + y;

    setCoord({ x: e.pageX, y: e.pageY });
  };

  const setRandomPositionfunc = () => {
    const x = Math.floor(Math.random() * 500) + 100;
    const y = Math.floor(Math.random() * 600) + 227;
    if (x > 500 || y > 600) {
      return setPotPosition({ x, y });
    }
    setPotPosition({ x: 314, y: 648 });
  };

  const onClickHandler = (e) => {
    setNumberClicks((pre) => pre + 1);
    setLastClick({ x: currentClick.x, y: currentClick.y });
    setCurrentClick({ x: e.pageX, y: e.pageY });
    setLastClickDiff({
      x: newClickDiff.x,
      y: newClickDiff.y,
    });
    setNewClickDiff({
      x: lastClick.x - currentClick.x,
      y: lastClick.y - currentClick.y,
    });

    checkClick();
  };

  const checkClick = () => {
    if (
      (currentClick.x === potPosition.x && currentClick.y === potPosition.y) ||
      (currentClick.x <= potPosition.x + 10 &&
        currentClick.x >= potPosition.x - 10 &&
        currentClick.y <= potPosition.y + 10 &&
        currentClick.y >= potPosition.y - 10)
    ) {
      alert("You Win" + " " + "You have clicked " + numberClicks + " times");
      setShowText(true);
      //   reset();
    } else if (
      (lastClick.x === potPosition.x && lastClick.y === potPosition.y) ||
      (lastClick.x <= potPosition.x + 10 &&
        lastClick.x >= potPosition.x - 10 &&
        lastClick.y <= potPosition.y + 10 &&
        lastClick.y >= potPosition.y - 10)
    ) {
      alert("You Win" + " " + "You have clicked " + numberClicks + " times");
      //   reset();
      setShowText(true);
    } else if (
      currentClick.x >= potPosition.x - 10 &&
      currentClick.x <= potPosition.x + 10 &&
      currentClick.y >= potPosition.y - 10 &&
      currentClick.y <= potPosition.y + 10
    ) {
      setNearOrFar("within 10 pixels");
      setShowText(true);
    } else if (lastClickDiff.x >= newClickDiff.x) {
      setNearOrFar("near from vertical direction ");
    } else if (lastClickDiff.y >= newClickDiff.y) {
      setNearOrFar("near from horizontal direction");
    } else if (lastClickDiff.x <= newClickDiff.x) {
      setNearOrFar("far from vertical direction");
    } else if (lastClickDiff.y <= newClickDiff.y) {
      setNearOrFar("far from horizontal direction");
    }
  };

  useEffect(() => {
    setRandomPositionfunc();
  }, []);

  const reset = () => {
    setNumberClicks(0);
    setLastClick({ x: 0, y: 0 });
    setCurrentClick({ x: 0, y: 0 });
    setNewClickDiff({ x: 0, y: 0 });
    setLastClickDiff({ x: 0, y: 0 });
    setNearOrFar("far");
    setShowText(false);
    setRandomPositionfunc();
  };

  return (
    <div className="text-black">
      <h1 className="text-2xl text-center font-bold text-gray-800">
        Number of Clicks = {numberClicks}{" "}
      </h1>
      <h1 className="text-2xl text-center font-bold text-gray-800">
        You are {nearOrFar}{" "}
      </h1>

      <p>
        Pot Position is x = {potPosition.x} , y= {potPosition.y}{" "}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        style={{ backgroundColor: "blue" }}
        onClick={reset}
      >
        Reset Game
      </button>

      <div className="bg-red-600 container" id="gameContainer">
        <div
          onMouseMove={handleMouseMove}
          className="bg-blog-200 container p-10"
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            bottom: "100px",
            top: "100px",
            left: "100px",
            backgroundColor: "gray",
          }}
          onClick={onClickHandler}
        >
          <p
            style={{
              position: "absolute",
              top: `${potPosition.y - 305}px`,
              left: `${potPosition.x - 100}px`,
              zIndex: "100",
            }}
            className={`${showText ? "block" : "hidden"}`}
          >
            pot
          </p>
          <h1>GameComp</h1>
          <p>
            {coord.x} + x + {coord.y} + y
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GameComp);
