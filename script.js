// Define variables
const body = document.getElementById("body");
const button = document.getElementById("btn");
const colors = [
  "red",
  "green",
  "yellow",
  "azure",
  "turquoise",
  "brown",
  "blueviolet",
  "burlywood",
  "aquoi",
  "aquoimarine",
  "bisque",
  "antiquewhite",
];

// Listen to event
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
