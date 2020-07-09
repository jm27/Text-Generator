const textArea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformText(text) {
  //take the text, and loop over each letter
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = mod.join("");
}

const filters = {
  sarcastic(letter, index) {
    console.log(letter, index);
    if (index % 2) {
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  },
  funky() {},
  unable() {},
};

textArea.addEventListener("input", (e) => transformText(e.target.value));
