var btn = document.querySelector("button");
var output = document.getElementById("output");
var auther = document.getElementById("auther");
var quotes = {
  quote: [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  ],
  auther: [
    "Oscar Wilde",
    "Marilyn Monroe",
    "Marilyn Monroe",
    "Frank Zappa",
    "Marcus Tullius Cicero",
    "Bernard M. Baruch",
  ],
};

var allQuotes = quotes.quote;
var allAuthers = quotes.auther;
var count = 0

function click () {
  output.innerHTML = allQuotes[count];
  auther.innerHTML = `-- ${allAuthers[count]}`
  count++
  if (count >= allQuotes.length) {
    count = 0
  }
}
btn.addEventListener ("click", click)



// Other Method



// var allQuotes = quotes.quote;
// var allAuther = quotes.auther;

// btn.onclick = function () {
//   var randomNum = Math.floor(Math.random() * allQuotes.length);
//   output.innerHTML = allQuotes[randomNum];
//   auther.innerHTML = allAuther[randomNum];
// };
