// Step-01: Create onload handler.

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById(`root`);
  const output = document.getElementById(`output`);
  const changeBtn = document.getElementById(`change-btn`);
  const copyBtn = document.getElementById(`copy-btn`);

  changeBtn.addEventListener(`click`, function () {
    const bgColor = hexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  copyBtn.addEventListener(`click`, function () {
    navigator.clipboard.writeText(output.value);
    generateToastMessage(`${output.value} copied`);
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

