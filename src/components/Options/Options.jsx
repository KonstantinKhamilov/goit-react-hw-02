import css from "./optionStyle.module.css";

export default function Options({
  goodCount,
  neutralCount,
  badCount,
  updateFeedbackCount,
  resetFeedback,
}) {
  return (
    <div className={css.divBut}>
      <ul className={css.ulBut}>
        <li>
          <button onClick={() => updateFeedbackCount("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedbackCount("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button onClick={() => updateFeedbackCount("bad")}>Bad</button>
        </li>
      </ul>
      {goodCount + neutralCount + badCount > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
}
