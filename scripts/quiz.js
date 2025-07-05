// TODO: goal dynamically display questions on the app

// Load the selected topics from localStorage

// Fetch related questions

// Shuffle and display with options

// Include a timer (e.g. 10–20 mins)

// Submit button → process result

document.addEventListener("DOMContentLoaded", () => {
  // Load the selected topics from localStorage

  const selectedSubject = localStorage.getItem("selectedSubject");
  const selectedClass = localStorage.getItem("selectedClass");
  const selectedTopic = localStorage.getItem("selectedTopic");
  const quizApp = document.getElementById("quizApp");

  console.log(selectedClass, selectedSubject, selectedTopic);

  // Fetch related questions

  fetch("/data/quiz.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`http error: ${res.status}`);
      }
      return res.json();
    })

    .then((data) => {
      /* Shuffle and display with options
       we need to put the list of questions in json in a single var
        so we have to break down the object to  get :  "Telling Time (to the hour)": [......list of questions ...] in "primarySection": {
    "grade 1": {
      "mathematics": {
        "Telling Time (to the hour)": []
        */
      console.log(data);

      const getTopicListFromObject =
        data.primarySection[selectedClass][selectedSubject];
      console.log(getTopicListFromObject);

      const getDesiredTopic = getTopicListFromObject[selectedTopic];
      console.log(getDesiredTopic);

      // Shuffle and display with options
      let questionIndex = 0;
      let questionObj = getDesiredTopic[questionIndex];
      console.log(questionObj);

      let question = questionObj.question;
      let questionOptions = questionObj.options;

      console.log(question);
      console.log(questionOptions);
      let getOptionArr = questionOptions
        .map((optionItem) => {
          return `<button> ${optionItem}</button>`;
        })
        .join("");
      quizApp.innerHTML = `<p>question ${questionIndex} </p>
      <p> ${question}</p>
      
      <p>${getOptionArr}</p>
      `;

      document.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
          questionIndex++;
          quizApp.innerHTML = `<p>question ${questionIndex} </p>
      <p> ${question}</p>
      
      <p>${getOptionArr}</p>
      `;
        }
      });
    })
    .catch((error) => {
      console.error("http error:", error);
    });
});
