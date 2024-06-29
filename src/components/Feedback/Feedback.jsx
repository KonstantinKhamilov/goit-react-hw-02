export default function Feedback(props) {
  const { goodCount, neutralCount, badCount } = props;

  const totalClicks = goodCount + neutralCount + badCount;
  const goodPercentage = (goodCount / (totalClicks - neutralCount)) * 100;

  if (totalClicks === 0) {
    return <p>Нет статистики.</p>;
  }

  return (
    <div>
      <p>Good: {goodCount}</p>
      <p>Neutral: {neutralCount}</p>
      <p>Bad: {badCount}</p>
      <p>Total clicks: {totalClicks}</p>
      <p>Good percentage: {goodPercentage.toFixed(2)}%</p>
    </div>
  );
}
