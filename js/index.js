var display = document.getElementById('display');
display.value = '0';

var toScreen = function(input){
  display.value += input;
  if (input === 'C') {
      display.value = '';
  }
}

var clearEntry = function(){
  var input = display.value;
  input = input.substring(0, input.length - 1);
  display.value = input;
}

var squared = function(){
  var input = display.value;
  input = eval(input*input);
  display.value = input;
}

var answer = function(){
  var input = display.value;
  input = eval(input);
  display.value = input;
}