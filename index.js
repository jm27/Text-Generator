const textArea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformText(text) {
    //take the text, and loop over each letter
    const mod = Array.from(text);
    console.log(mod)
  result.textContent = text;
}

const filters = {
  sarcastic() {},
  funky() {},
  unable() {},
};

textArea.addEventListener("input", (e) => transformText(e.target.value));
