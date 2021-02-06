export const questions = [
  {
    question: "JavaScript is a ___ -side programming language.",
    options: [
      { answer: "Server", isCorrect: false },
      { answer: "Client", isCorrect: false },
      { answer: "Both", isCorrect: true },
    ],
  },
  {
    question: "How many primitives types JavaScript have?",
    options: [
      { answer: "8", isCorrect: false },
      { answer: "6", isCorrect: true },
      { answer: "3", isCorrect: false },
      { answer: "9", isCorrect: false },
    ],
  },
  {
    question: 'What would be the result of 3 + 2 + "7" = ?',
    options: [
      { answer: "57", isCorrect: true },
      { answer: "12", isCorrect: false },
      { answer: "NaN", isCorrect: false },
      { answer: "undefined", isCorrect: false },
    ],
  },
  {
    question: "__proto__ and prototype that is the same things?",
    options: [
      { answer: "No", isCorrect: true },
      { answer: "Yes", isCorrect: false },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      { answer: "<scripting>", isCorrect: false },
      { answer: "<javascript>", isCorrect: false },
      { answer: "<js>", isCorrect: false },
      { answer: "<script>", isCorrect: true },
    ],
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "app.js" ?',
    options: [
      { answer: '<script href="app.js">', isCorrect: false },
      { answer: '<script name="app.js">', isCorrect: false },
      { answer: '<script src="app.js">', isCorrect: true },
      { answer: '<script url="app.js">', isCorrect: false },
    ],
  },
  {
    question: "How to create an arrow function in JavaScript?",
    options: [
      { answer: "const someCompute = () => {...}", isCorrect: true },
      { answer: "const someCompute = {...}", isCorrect: false },
      { answer: "function someCompute(){...}", isCorrect: false },
      { answer: "const someCompute => {...}", isCorrect: false },
    ],
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: [
      { answer: "if i === 5", isCorrect: false },
      { answer: "if (i === 5)", isCorrect: true },
      { answer: "if i = 5", isCorrect: false },
      { answer: "if i = 5 then", isCorrect: false },
    ],
  },
  {
    question: "What it will print: console.log(String('Hello') === 'Hello') ?",
    options: [
      { answer: "False", isCorrect: false },
      { answer: "TypeError", isCorrect: false },
      { answer: "True", isCorrect: true },
    ],
  },
  {
    question:
      "What is the result of this code: console.log(undefined == null) ?",
    options: [
      { answer: "True", isCorrect: true },
      { answer: "False", isCorrect: false },
      { answer: "Error", isCorrect: false },
      { answer: "TypeError", isCorrect: false }, //10
    ],
  },
  {
    question: 'How do you call a function named "someCompute" ?',
    options: [
      { answer: "callback someCompute", isCorrect: false },
      { answer: "someCompute()", isCorrect: true },
      { answer: "call function someCompute()", isCorrect: false },
      { answer: "someCompute", isCorrect: false },
    ],
  },
  {
    question: "How can you add a single line comment in JavaSript?",
    options: [
      { answer: "<!--This is a comment-->", isCorrect: false },
      { answer: "*This is a comment", isCorrect: false },
      { answer: "//This is a comment", isCorrect: true },
      { answer: "/*This is a comment*/", isCorrect: false },
    ],
  },
  {
    question: "How do you comment multiple lines in JavaScript?",
    options: [
      { answer: "/*Comment*/", isCorrect: true },
      { answer: "<!-- Comment -->", isCorrect: false },
      { answer: "*Comment", isCorrect: false },
      { answer: "//Comment", isCorrect: false },
    ],
  },
  {
    question: "How do you round the number 3.35, to the nearest integer?",
    options: [
      { answer: "rnd(3.35)", isCorrect: false },
      { answer: "round(3.35)", isCorrect: false },
      { answer: "Math.round(3.35)", isCorrect: true },
      { answer: "Math.rnd(3.35)", isCorrect: false },
    ],
  },
  {
    question: "JavaScript is the same as Java.",
    options: [
      { answer: "True", isCorrect: false },
      { answer: "False", isCorrect: true },
    ],
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      { answer: "onMouseClick", isCorrect: false },
      { answer: "onMouseOver", isCorrect: false },
      { answer: "onChange", isCorrect: false },
      { answer: "onClick", isCorrect: true },
    ],
  },
  {
    question: "Which of the following options is array?",
    options: [
      { answer: "[1,2,3,4]", isCorrect: true },
      { answer: "{1,2,3,4}", isCorrect: false },
      { answer: '"1,2,3,4"', isCorrect: false },
      { answer: "(1,2,3,4)", isCorrect: false },
    ],
  },
  {
    question:
      "fetch() allows you to make network requests similar to XMLHttpRequest (XHR)",
    options: [
      { answer: "True", isCorrect: true },
      { answer: "False", isCorrect: false },
    ],
  },
  {
    question: "Redux it's ...?",
    options: [
      { answer: "Application Programming Interface", isCorrect: false },
      { answer: "Design pattern", isCorrect: false },
      { answer: "State Managment library", isCorrect: true },
    ],
  },
  {
    question: "Git it's ...?",
    options: [
      { answer: "State Managment library", isCorrect: false },
      { answer: "version-control system", isCorrect: true },
      { answer: "JavaScript framework", isCorrect: false },
    ],
  },
];
