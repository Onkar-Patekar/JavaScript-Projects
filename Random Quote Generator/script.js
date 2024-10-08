const quotes = [
  "Make dream come true.",
  "Eat Sleet Repeat.",
  "Get busy living or get busy dying.",
  "Goal are always best.",
  "Hard Work always payoff.",
];

const usedIndex = new Set();
const quoteDisplay = document.getElementById("quote");
// const clearQuote = document.getElementById("clearQuote");

function generateQuote() {
  if (usedIndex.size >= quotes.length) {
    usedIndex.clear();
  }
  // quoteDisplay.innerHTML = "Onkar Patekar";
  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (usedIndex.has(randomIndex)) continue;

    const quote = quotes[randomIndex];
    quoteDisplay.innerHTML = quote;
    usedIndex.add(randomIndex);
    break;
  }
}

// function clearQuote() {
//   clearQuote.innerHTML = "";
// }
