const number = document.getElementById("number");
const result = document.getElementById("result");
let r = [];
let i = 0;
const button = document.getElementById("copy");
function sa() {
  r = [0];
  i = 0;
  number.value = "";
  result.innerText = "";
  button.classList.remove("Copied");
  button.innerText = "Copiar";
}

button.addEventListener("click", function () {
  const text = result.innerText;
  navigator.clipboard.writeText(text);
  button.classList.toggle("Copied");
  if (button.classList.contains("Copied")) {
    button.innerText = "Copiado";
  } else {
    button.innerText = "Copiar";
  }
});

number.addEventListener("keydown", (e) => {
  if (e.key >= 0 || e.key === "Backspace") {
    console.log(e);
    if (e.key === "Backspace") {
      r = r.slice(0, -1);
      i--;
      if (i <= 0) {
        i = 0;
        r = [0];
      }
      result.innerText = parseInt(r.join("")).toString(2);
      return;
    }
    r[i] = e.key;
    i++;
    let binary = parseInt(r.join(""));
    binary = binary.toString(2);
    result.innerText = binary;

    console.log(r);
  } else {
    console.log(e);
    e.preventDefault();
  }
});
