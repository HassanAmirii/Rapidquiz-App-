document.addEventListener("DOMContentLoaded", () => {
  const topicApp = document.getElementById("topicApp");
  const selectedClass = localStorage.getItem("selectedClass");
  const selectedSubject = localStorage.getItem("selectedSubject");

  fetch("/data/topic.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const getTopics = data.primarySection;
      console.log(getTopics);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
