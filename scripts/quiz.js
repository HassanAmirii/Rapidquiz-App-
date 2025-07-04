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

  // Fetch related questions

  fetch("/data/quiz.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`http error: ${res.status}`);
      }
      return res.json();
    })

    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("http error:", error);
    });
});
