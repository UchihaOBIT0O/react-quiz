export default function FinishedScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        {" "}
        You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} {Math.ceil([percentage])}%
        </strong>
      </p>
      <p className="highscore">HighScore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
