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
  const quizTemplate = document.getElementById("quizTemplate");

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
      function displayQuestion(index) {
        if (index < getDesiredTopic.length) {
          let questionObj = getDesiredTopic[index];
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
          quizTemplate.innerHTML = ` <p>question ${questionIndex + 1} </p>
      <p> ${question}</p>
      
      <p>${getOptionArr}</p>   
      `;
        } else {
          // All questions answered, display a completion message or results
          quizTemplate.innerHTML = `<h2>Quiz Complete!</h2>`;
          //  remove the event listener if no more interaction is needed
          document.removeEventListener("click", clickHandler);
        }
      }

      // Define the click handler function first
      const clickHandler = function (e) {
        // <<< Define the function here
        const button = e.target.closest("button");
        if (button) {
          questionIndex++;
          displayQuestion(questionIndex); // This is what updates the UI
        }
      };

      // Then, attach the event listener using the defined clickHandler
      quizTemplate.addEventListener("click", clickHandler); // <<< Pass the function reference here

      // Initial display of the first question
      displayQuestion(questionIndex);
    })
    .catch((error) => {
      console.error("http error:", error);
    });
});
