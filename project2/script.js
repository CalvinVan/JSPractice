
var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; // list to hold hex values
var indexList = [15,15,15,15,15,15]; //list to hold current index values of each character
var codeList = ["F","F","F","F","F","F"]; //list to hold the value associated with the values of the index

function random() { //Function that generates random values and sets them to the index which is then translated to code.
  indexList = [];
  codeList = [];

  for(let i = 0; i < 6; i++) {
    var index = Math.floor(Math.random()* hex_numbers.length);
    indexList.push(index);
    codeList.push(hex_numbers[index]);
  }

  setColor(codeList); 

   

}


function setColor() { //function that joins together the code list into a string and then sets the background color to it.


  var hexcode = codeList.join('') ;

  document.getElementById("hex-code").innerHTML=hexcode;
  document.getElementsByTagName("body")[0].style.
  background = `#${hexcode}`;
}

function increment() { //function that increments the hex color shown on the page by one.

  position_pointer = 5; // variable that stores the end position of the list and used to give the location of the list
  var search = true; // bool value that will be used for a while loop

  while(search) { //loop that iterates through the list to increment it
    
  
    if(indexList[position_pointer] == hex_numbers.length-1){ //checks to see if the current index value at the position is equal to last possible value of a hex code (f)
      indexList[position_pointer] = 0; //If it is, then the value will then be turn to zero as it has bypassed the length of the list through incrementation.
      codeList[position_pointer] = hex_numbers[0]; // The current code is then translated to 0 / the beginning value of the hex code to match the indexList 

      if(position_pointer >= 0){ //if statement to check if we have reached the beginning of the code list. If not, then we move the pointer left to check as the values carry over
        position_pointer -= 1;
      }

      else{
        search = false; //If it is at the beginning of the list, then we will stop the search as there are no more values to iterate through.
      }
    }
    
    else {
      indexList[position_pointer] += 1; //If the current index value is not equal to the length of the list - 1, then we will simply just increase it by one.
      codeList[position_pointer] = hex_numbers[indexList[position_pointer]]; // Then the code is translated accordingly to the index.
      search = false; //Finally we end the search.
    }
  }

  setColor(); //functioin call to now put together our code.
}


function decrement() { //the function decremets the hex color shown on the page by one.

  position_pointer = 5; //position pointer for searching
  var search = true; // bool value to trigger searching

  while(search) { //while loop to iterate through the index lists to change values down by 1 accordingly.
 
    if(indexList[position_pointer] == 0) { //if the current value is equal to 0, then it will be set to the last value of the list which in this case would be 15

      indexList[position_pointer] = (hex_numbers.length-1);
      codeList[position_pointer] = hex_numbers[hex_numbers.length-1];

      if(position_pointer >= 0){ //checks to see if we have reached the beginning of the list. if not then move pointer to the left.
        position_pointer -= 1;
      }

      else{
        search = false; //if so then end search as there are no more values to search.
      }
    }

    else { // else statement for when the current index searched is not the first possible number so it just decrements it regularly
      indexList[position_pointer] -= 1; 
      codeList[position_pointer] = hex_numbers[indexList[position_pointer]];
      search = false;
    }
  }
  
  setColor();

}