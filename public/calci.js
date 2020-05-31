
const socket = io.connect("http://localhost:5000");
socket.on("calc-log", (data) => console.log(data));
var count =0;
function getNumber(num){
	var input_var = document.getElementById('input');
	switch(num){
		case 1:
		input_var.value +='1';
		break;
		case 2:
		input_var.value +='2';
		break;
		case 3:
		input_var.value +='3';
		break;
		case 4:
		input_var.value +='4';
		break;
		case 5:
		input_var.value +='5';
		break;
		case 6:
		input_var.value +='6';
		break;
		case 7:
		input_var.value +='7';
		break;
		case 8:
		input_var.value +='8';
		break;
		case 9:
		input_var.value +='9';
		break;
		case 0:
		input_var.value +='0';
		break;
	}
}
function clearScreen(){
	document.getElementById('input').value ="";
	document.getElementById('answer').value ="";
}
function getOperand(operand){
	var input_var = document.getElementById('input');
	switch(operand){
		case '+':
			input_var.value += '+';
			break;
		case '-':
			input_var.value += '-';
			break;
		case 'x':
			input_var.value += '*';
			break;
		case '/':
			input_var.value += '/';
			break;
		case '+/-':
			input_var.value += '-'+ input_var.value;
	}
}
function backspace(){
	var input_var = document.getElementById('input');
	var temp = input_var.value;
	if (temp.length >0){
		temp = temp.substring(0, temp.length-1);
		input_var.value = temp;
	}
}
//var q = new Queue();
var result =1;
function compute(){
	var input_var = document.getElementById('input');
	var ans = Math.floor(+eval(input_var.value));
	document.getElementById('answer').value = '=' + ans;
	var logvalue = input_var.value + ' = ' + ans;
	//document.write(to_table);
	socket.emit("log", { username: username.value, logvalue });
  	//var firstTime = localStorage.getItem("first_time");
  	
}
socket.on("log", (data) => {
  output.innerHTML = "";
  data.forEach((item) => {
    output.innerHTML +=
      "<p><strong>" + item.user + ": </strong>" + item.logvalue + "</p>";
  });
});


function brackets(){
	var input_var = document.getElementById('input');
	if (count ==0){
		input_var.value += '(';
		count =1;
	}
	else if (count ==1){
		input_var.value += ')';
		count =0;
	}

}