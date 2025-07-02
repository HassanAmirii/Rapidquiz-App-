document.addEventListener("DOMContentLoaded", () => {
  topicApp = document.getElementById("topicApp");
  selectedClass = localStorage.getItem("selectedClass");
  selectedSubject = localStorage.getItem("selectedSubject");

  fetch("/data/topic.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
