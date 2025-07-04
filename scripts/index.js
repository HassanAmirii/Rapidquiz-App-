document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");

  if (startButton) {
    startButton.addEventListener("click", () => {
      // redirect to class selection page
      window.location.href = "/pages/class.html";
    });
  }
});
