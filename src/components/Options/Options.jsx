import { useState } from "react";
import Feedback from "../Feedback/Feedback";

export default function Options() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleClicke = (type) => {
    if (type === "good") {
      setGoodCount(goodCount + 1);
    } else if (type === "neutral") {
      setNeutralCount(neutralCount + 1);
    } else if (type === "bad") {
      setBadCount(badCount + 1);
    }
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleClicke("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => handleClicke("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => handleClicke("bad")}>Bad</button>
        </li>
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("goodCount");
              localStorage.removeItem("neutralCount");
              localStorage.removeItem("badCount");
              window.location.reload();
            }}
          >
            Сброс статистики
          </button>
        </li>
      </ul>
      <Feedback
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
      />
    </div>
  );
}
