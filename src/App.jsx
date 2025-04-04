import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [voting, setVoting] = useState(() => {
    const savedVoting = localStorage.getItem("voting");
    return savedVoting
      ? JSON.parse(savedVoting)
      : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("voting", JSON.stringify(voting));
  }, [voting]);
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setVoting({ good: 0, neutral: 0, bad: 0 });
    } else {
      setVoting({
        ...voting,
        [feedbackType]: voting[feedbackType] + 1,
      });
    }
  };
  const totalFeedback = voting.good + voting.neutral + voting.bad;
  const positiveFeedback = Math.round((voting.good / totalFeedback) * 100);
  const hasFeedback = Object.values(voting).some((value) => value > 0);
  return (
    <div className="container">
      <Description />
      <Options updateFeedback={updateFeedback} hasFeedback={hasFeedback} />
      {hasFeedback ? (
        <Feedback
          {...voting}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
