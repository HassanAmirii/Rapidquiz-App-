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
      const getClass = data.primarySection;
      const refinedClass = getClass
        .map(function (classItem) {
          return `<button id ="${classItem.class}"> ${classItem.class}</button>`;
        })
        .join("");
      classApp.innerHTML = refinedClass;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      var selectedClass = e.target.id;
    }
    localStorage.setItem("selectedClass", selectedClass);
    window.location.href = "/pages/subject.html";
  });
});
