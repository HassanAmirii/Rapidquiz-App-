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
      const findTopicInList = getTopics.find((topicItem) => {
        return topicItem[selectedClass][selectedSubject];
      });
      console.log(findTopicInList);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
