import { useState } from "react";
import InputScreen from "./InputScreen";
import { questions } from "./questions";
import QuestionScreen from "./QuestionsScreen";
import ResultScreen from "./ResultScreen";
const Quiz = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);
  const [element, setElement] = useState(0);
  const [showResult, setShowResult] = useState(true);
  const [result, setResult] = useState(0);
  const [congratulation, setCongartulation] = useState("Nice result");
  const nextQuestion = (answer) => {
    setElement(element + 1);
    if (element === 14) {
      setShowResult(false);
    }
    if (answer.isCorrect === true) {
      setResult(result + 1);

      if (result < 10) {
        setCongartulation(
          `${value} it's a nice result, but I'm sure that you can better`
        );
      } else if (15 < result < 20) {
        setCongartulation(`${value} your JavaScript is really good`);
      } else if (result === 20) {
        setCongartulation(`${value} your JavaScript is awesome`);
      }
    }
  };
  let shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  const hideInput = () => {
    setShow(false);
    shuffle(questions);
  };
  const questionScreenStyles = {
    display: showResult ? "flex" : "none",
  };
  const tryAgain = () => {
    setShow(false);
    setShowResult(true);
    setElement(0);
    setResult(0);
    shuffle(questions);
  };

  return (
    <div id="quiz" className="gameContainer">
      {show ? (
        <InputScreen
          hideInput={hideInput}
          value={value}
          inputHandler={inputHandler}
        />
      ) : (
        <QuestionScreen
          styles={questionScreenStyles}
          nextQuestion={nextQuestion}
          element={element}
        />
      )}
      {showResult ? null : (
        <ResultScreen
          tryAgain={tryAgain}
          congratulation={congratulation}
          value={value}
          result={result}
        />
      )}
    </div>
  );
};
export default Quiz;
