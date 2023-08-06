function humorGenerate() {
  var humorQuotes = {
    "- Albert Einstein" : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "- Steve Martin" : "“A day without sunshine is like, you know, night.”",
    "- Douglas Adams," : "“I love deadlines. I love the whooshing noise they make as they go by.”",
    "- Charles M. Schulz" : "“All you need is love. But a little chocolate now and then doesn't hurt.”",
    "- Jim Henson" : "“Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.”",
    "- Woody Allen" : "“I'm not afraid of death; I just don't want to be there when it happens.”",
    "- Paul Terry" : "“Whenever I feel the need to exercise, I lie down until it goes away.”",
    "- Charles Bukowski" : "“Some people never go crazy. What truly horrible lives they must lead.”",
    "- Terry Pratchett" : "“The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.”",
    "- George Carlin" : "“The reason I talk to myself is because I’m the only one whose answers I accept.”"
  }
    



  var authors = Object.keys(humorQuotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = humorQuotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
  }


function suntzuGenerate() {
  var suntzuQuotes = {
    "- 1" : '"He will win who knows when to fight and when not to fight."',
    "- 2" : '“Opportunities multiply as they are seized.”',
    "- 3" : '"It is easy to love your friend, but sometimes the hardest lesson to learn is to love your enemy.”',
    "- 4" : '"Plan for what it is difficult while it is easy, do what is great while it is small.”',
    "- 5" : '"If the mind is willing, the flesh could go on and on without many things.”',
    "- 6" : '"Build your opponent a golden bridge to retreat across.”',
    "- 7" : '"One may know how to conquer without being able to do it.”',
    "- 8" : '“What the ancients called a clever fighter is one who not only wins, but excels in winning with ease.”',
    "- 9" : '"Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.”',
    "- 10" : '"Even the finest sword plunged into salt water will eventually rust.”'
  }

  var authors = Object.keys(suntzuQuotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = suntzuQuotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = "- Sun Tzu";
}

function motivationGenerate() {

  var motivationQuotes = {
    "- Roy T. Bennett " : "“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”",
    "- Viktor E. Frankl" : "“Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.”",
    "- Steve Maraboli" : "“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.”",
    "-  Arthur C. Clarke" : "“The only way of discovering the limits of the possible is to venture a little way past them into the impossible.”",
    "- Pablo Picasso" : "“Learn the rules like a pro, so you can break them like an artist.”",
    "- Ralph Waldo Emerson " : "“Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.”",
    "- Wayne W. Dyer" : "“Change the way you look at things and the things you look at change.”",
    "- Helen Keller" : "“Although the world is full of suffering, it is full also of the overcoming of it.”",
    "- Samuel Lover" : "“Circumstances are the rulers of the weak; they are but the instruments of the wise.”"

  }

  var authors = Object.keys(motivationQuotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = motivationQuotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

}

