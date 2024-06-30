import { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notifications/Notification";

export default function Options({ handleReset }) {
  const [feedbackCounts, setFeedbackCounts] = useState({
    goodCount: 0,
    neutralCount: 0,
    badCount: 0,
  });

  useEffect(() => {
    // Зчитування з localStorage при ініціалізації
    const savedCounts = JSON.parse(localStorage.getItem("feedbackCounts"));
    if (savedCounts) {
      setFeedbackCounts(savedCounts);
    }
  }, []);

  const handleClicke = (type) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [`${type}Count`]: prevCounts[`${type}Count`] + 1,
    }));
  };

  useEffect(() => {
    // Збереження в localStorage при зміні стану
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

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
          <button onClick={handleReset}>Сброс статистики</button>
        </li>
      </ul>
      {feedbackCounts.goodCount +
        feedbackCounts.neutralCount +
        feedbackCounts.badCount ===
      0 ? (
        <Notification />
      ) : (
        <Feedback
          goodCount={feedbackCounts.goodCount}
          neutralCount={feedbackCounts.neutralCount}
          badCount={feedbackCounts.badCount}
        />
      )}
    </div>
  );
}
