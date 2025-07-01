document.addEventListener("DOMContentLoaded", () => {
  const classApp = document.getElementById("classSelection");
  fetch("/data/class.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`http error: ${response.status}: ${response.text}`);
      }
      return response.json();
    })
    .then(function (data) {
      const getData = data.primarySection;
      const refinedData = getData
        .map(function (classItem) {
          return `<button id ="${classItem.class}"> ${classItem.class}</button>`;
        })
        .join("");
      classApp.innerHTML = refinedData;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });

  document.addEventListener("click", (e) => {
    let selectedClass = e.target.id;
    localStorage.setItem("selectedClass", selectedClass);
    window.location.href = "/pages/subject.html";
  });
});
