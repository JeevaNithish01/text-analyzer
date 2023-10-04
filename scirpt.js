var words;
var charCounter;

function _(val) {
  return document.getElementById(val);
}

function print(val2){
  return console.log(val2);
}

function action(){
  var count = _("count").value;
  // print(count);
  var sentence = count.trim();
  // print(sentence);
  charCounter = 0;
  var longestword = "";
    charCount();
    wordCount();
    longestWord();
    averageWordLen();
  function charCount(){
    for(let i =0; i<sentence.length; i++){
      if(sentence[i] != " "){
        charCounter++;
      }
    }
    _("charcount").textContent = `Total characters : ${charCounter}`;
  }
  function wordCount() {
      words = sentence.split(/\s+/g);

    _("wordcount").textContent = `Total words : ${words.length}`;
  }
  function longestWord(){
    for(let i = 0; i<words.length; i++) {
      if (words[i].length > longestword.length){
        longestword = words[i];
      }
    }
    _("longestword").textContent = `Longest word : ${longestword}`;
  }
  function averageWordLen(){
      var averageWord = charCounter/words.length;
    _("average").textContent = `Average word length : ${averageWord}`
  }

}

