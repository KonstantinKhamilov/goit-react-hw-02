export default function Feedback({
  goodCount,
  neutralCount,
  badCount,
  totalClicks,
  goodPercentage,
}) {
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
