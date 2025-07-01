document.addEventListener("DOMContentLoaded", () => {
  const startbutton = document.getElementById("start-btn");

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.id === "start-btn") {
      window.location.href = "/pages/class.html";
    }
  });
});
