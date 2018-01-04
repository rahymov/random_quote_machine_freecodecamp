$(document).ready(function(){
  function getQuote(){
  var quotes = ["I love you the more in that I believe you had liked me for my own sake and for nothing else.", "But man is not made for defeat. A man can be destroyed but not defeated."];
  var author = ["John Keats", "Ernest Hemingway"];
  var randomNum = Math.floor(Math.random()*quotes.length);
  var randomQuote = quotes[randomNum] + "\n";
  var randomAuthor = author[randomNum] ;
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  $("#new_quote").on("click", function(){
    getQuote();
  });
});