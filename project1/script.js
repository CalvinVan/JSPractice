
/* 
this is what the video originally had.
Changes between 6 colors in the same order

var index = 0;
var colors = ["red","blue","orange","yellow","green","purple"];

document.querySelector("#submit").addEventListener("click", ()=> {
  if(index > colors.length - 1)
    index = 0;
    document.body.style.backgroundColor = colors[index++];



}); */

/*
Now I will modify it to make it different. For this one, I am going to make it where
they are different colors.

*/
 
function changeColor(){
  var r = Math.floor(Math.random() *  256);
  var b = Math.floor(Math.random() *  256);
  var g = Math.floor(Math.random() *  256);

  var background_color = `rgb(${r},${b},${g})`;
  document.getElementsByTagName("body")[0].
  style.background = background_color;
}

