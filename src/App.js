import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Question from './components/Question';
import Final from './components/Final';

const questions = 
[
  {
    title:      "Какой язык программирования самый быстрый",
    variants:   ["C","C++","Assembler","C#","Python"],
    correct:    2
  },
  {
    title:      "Какой язык является чисто процедурным",
    variants:   ["C","C++","C#","Java"],
    correct:    0
  },
  {
    title:      "Что такое функция",
    variants:   [
      "Именованная область памяти, содержимое которой может изменяться во время выполнения программ",
      "Именованная область памяти, содержимое которой НЕ может изменяться во время выполнения программ",
      "Именованная область кода, которую можно вызывать при необходимости "],
    correct:    2
  },
  {
    title:      "Что такое Переменная",
    variants:   [
      "Именованная область памяти, содержимое которой может изменяться во время выполнения программ",
      "Именованная область памяти, содержимое которой НЕ может изменяться во время выполнения программ",
      "Именованная область кода, которую можно вызывать при необходимости "],
    correct:    0
  },
  {
    title:      "Что такое метод",
    variants:   ["Переменная внутри класса","Функция внутри класса","Реализация алгоритма"],
    correct:    1
  },
  {
    title:      "Какая структура данных обеспечивает добавление/удаление элементов за констатное время",
    variants:   ["Массив","Список","Дерево"],
    correct:    1
  },
  {
    title:      "Какая структура данных обеспечивает доступ к элементам за константное время",
    variants:   ["Массив","Список","Дерево"],
    correct:    0
  },
]

function App() 
{
  const totalQuestions = questions.length;
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showResult, setShowResult] = useState(false);


  let question = questions[step];
  
  const onClickVariant = (variant) => {
    setSelectedVariant(variant);
    if(variant === question.correct)setCorrect(correct+1);
    setShowResult(true);
    setTimeout(() => {
        setStep(step+1);
        setSelectedVariant(null);
        setShowResult(false);
    }, 1500);
};

  const restart = () => 
    {
      setStep(0);
      setCorrect(0);
    };

  return (
    <div className="main">
      {
        step < totalQuestions ?
        <Question question={question} onClickVariant={onClickVariant} step={step} totalQuestions={totalQuestions} questions={questions}
        selectedVariant={selectedVariant} showResult={showResult}/>
        : <Final totalQuestions={totalQuestions} correctAnswers={correct} onRestart={restart}/>
      }
       {/* <h4 style={{display: "flex", justifyContent:"space-between"}}><div>Номер вопросов:</div> <div>{step}</div> </h4>
      <h4 style={{display: "flex", justifyContent:"space-between"}}><div> Ответов:</div> <div>{correct}</div> </h4> */}
    </div>
  );
}

export default App;
