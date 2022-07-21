// Step-01: Create onload handler.

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById(`root`);
  const btn = document.getElementById(`change-btn`);
  const output = document.getElementById(`output`);

  btn.addEventListener(`click`, function () {
    const bgColor = hexColor();
    root.style.backgroundColor = bgColor;
    output.innerHTML = `Hex Color Code: ${bgColor}`;
  });
}

// Step-02: random color generator function.

function hexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const result = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;

  return result;
}
