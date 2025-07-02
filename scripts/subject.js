document.addEventListener("DOMContentLoaded", () => {
  let selectedClass = localStorage.getItem("selectedClass");
  const subjectApp = document.getElementById("subjectSelection");
  fetch("/data/subject.json")
    .then(function (res) {
      if (!res.ok) {
        throw new Error(`http: ${res.status}: ${res.statusTexttext}`);
      }
      return res.json();
    })
    .then(function (data) {
      const getSubject = data.primarySection;
      const findSubjectInList = getSubject.find(function (subjectItem) {
        return subjectItem[selectedClass];
      });
      const subject = findSubjectInList[selectedClass];
      const refinedSubject = subject
        .map(function (subjectItem) {
          return `
          
          
          <button id="${subjectItem}">${subjectItem}</button>`;
        })
        .join("");

      subjectApp.innerHTML = refinedSubject;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      var selectedSubject = e.target.id;
    }
    localStorage.setItem("selectedSubject", selectedSubject);
    window.location.href = "/pages/topic.html";
  });
});
