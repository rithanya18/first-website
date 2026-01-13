const button = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "🎉 JavaScript changed both text and style!";
  message.style.color = "blue";
  message.style.fontSize = "20px";
});


