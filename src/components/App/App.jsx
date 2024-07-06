import { useState, useEffect } from "react";
import description from "../../description.json";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notifications/Notification";

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    goodCount: 0,
    neutralCount: 0,
    badCount: 0,
  });

  useEffect(() => {
    // Загрузка данных из localStorage при инициализации
    const savedCounts = JSON.parse(localStorage.getItem("feedbackCounts"));
    if (savedCounts) {
      setFeedbackCounts(savedCounts);
    }
  }, []);

  useEffect(() => {
    // Сохранение данных в localStorage при изменении состояния
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  // Функция для обновления количества отзывов
  const updateFeedbackCount = (type) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [`${type}Count`]: prevCounts[`${type}Count`] + 1,
    }));
  };

  // Расчет общего количества кликов
  const totalClicks =
    feedbackCounts.goodCount +
    feedbackCounts.neutralCount +
    feedbackCounts.badCount;

  // Расчет процента положительных отзывов
  const goodPercentage =
    totalClicks === 0
      ? 0
      : (feedbackCounts.goodCount /
          (totalClicks - feedbackCounts.neutralCount)) *
        100;

  // Функция для сброса отзывов
  const resetFeedback = () => {
    setFeedbackCounts({
      goodCount: 0,
      neutralCount: 0,
      badCount: 0,
    });
    localStorage.removeItem("feedbackCounts");
  };

  return (
    <>
      <Description name={description.name} text={description.text} />
      <Options
        goodCount={feedbackCounts.goodCount}
        neutralCount={feedbackCounts.neutralCount}
        badCount={feedbackCounts.badCount}
        updateFeedbackCount={updateFeedbackCount}
        resetFeedback={resetFeedback}
      />
      {totalClicks > 0 ? (
        <Feedback
          goodCount={feedbackCounts.goodCount}
          neutralCount={feedbackCounts.neutralCount}
          badCount={feedbackCounts.badCount}
          totalClicks={totalClicks}
          goodPercentage={goodPercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
