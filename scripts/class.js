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
      const refineData = getData
        .map(function (classItem) {
          return `<button> ${classItem.class}</button>`;
        })
        .join("");
      classApp.innerHTML = refineData;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });

  document.addEventListener("click", (e) => {
    window.location.href = "subject.html";
  });
});
