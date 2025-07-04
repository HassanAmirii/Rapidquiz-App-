document.addEventListener("DOMContentLoaded", () => {
  const topicApp = document.getElementById("topicApp");
  const selectedClass = localStorage.getItem("selectedClass");
  const selectedSubject = localStorage.getItem("selectedSubject");

  fetch("/data/topic.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const getTopics = data.primarySection;
      if (selectedClass && selectedSubject) {
        if (getTopics) {
          console.log(getTopics);
          var findTopicInList = getTopics.find((topicItem) => {
            return topicItem[selectedClass];
          });
        } else {
          console.log("cant find get topics object ");
        }

        console.log(findTopicInList);
        const topicArray = findTopicInList[selectedClass][selectedSubject];
        console.log(topicArray);
        var refinedTopic = topicArray
          .map((topicItem) => {
            return `
          <button>${topicItem}</button>`;
          })
          .join("");
      } else {
        console.log("selected class or selected subject doesnt exist");
      }

      if (refinedTopic) {
        topicApp.innerHTML = refinedTopic;
      } else {
        topicApp.innerHTML = `<p>sorry cant find topics </p>`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  document.addEventListener("click", (e) => {
    const selectedTopic = e.target.id;
  });
});
