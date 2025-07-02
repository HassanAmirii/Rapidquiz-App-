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
        topicItem[selectedClass];
      });
      console.log(findTopicInList);
      const topicArray = findTopicInList[selectedClass][selectedSubject];
      const refinedTopic = topicArray
        .map((topicItem) => {
          return `
          <button id="">${topicItem[selectedSubject]}</button>`;
        })
        .join("");
      topicApp.innerHTML = refinedTopic;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
