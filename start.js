document.addEventListener("DOMContentLoaded", () => {
  const startbutton = document.getElementById("start-btn");

  document.addEventListener("click", (e) => {
    window.location.href = "class.html";
  });

  if (startbutton) {
    console.log("there exist");
  }
});
