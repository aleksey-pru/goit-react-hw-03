import s from "./Options.module.css";
const Options = ({ updateFeedback, hasFeedback }) => {
  return (
    <div className={s.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {hasFeedback && (
        <button onClick={() => updateFeedback("reset")}>Reset</button>
      )}
    </div>
  );
};

export default Options;
