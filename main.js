function onFocus(){
	var obj = document.inputform.todoText;
	if (obj.value == "type your todoList here!") obj.value = "";
}
function onBlur(){
	var obj = document.inputform.todoText;
	if (obj.value == "") obj.value = "type your todoList here!";
}
var todoCount = 0,finishCount = 0,count = 0;
var todo = new Array(200);
var finish = new Array(200);
var list = new Array(400);
function feature(text,done,ddl,id){
	this.text = text;
	this.done = done;
	this.ddl = ddl;
	this.id = id;
	this.exist = true;
}

function reload(){
	var todoHead = document.getElementById("tcount");
	var finishHead = document.getElementById("fcount");
	var Todo = document.getElementById("Todo");
	var Finish = document.getElementById("Finish");
	var t = "",f="";
	todoCount = 0;
	finishCount = 0;
	for (i = 1;i <= count;i++){
		if (list[i].exist == false) continue;
		if (list[i].done == false){
			t = t + "<li draggable='true'><input type=\"checkbox\" onchange=\"update(" + i + ",true,true);\">" + list[i].text + 
				"<input type=\"button\" onclick=\"update(" +i +",false,false);\" value = \"delete\" class='del'></li>";   
			todoCount++;
		}else{
			f = f + "<li draggable='true'> <input type=\"checkbox\" onclick=\"update(" + i + ",false,true);\" checked='checked'>" + list[i].text + 
				"<input type=\"button\" onclick=\"update(" +i +",false,false);\" value = \"delete\" class='del'>";
			finishCount++;
		}
	}
	Todo.innerHTML = t;
	Finish.innerHTML = f;
	todoHead.innerHTML = "Todo (" + todoCount + ")";
	finishHead.innerHTML = "Finish (" + finishCount + ")";
	window.reload();
}

function update(id,done,exist){
	list[id].done = done;
	list[id].exist = exist;
	reload();
}

function submit(){
	if (document.inputform.todoText.value == "type your todoList here!"
	 || document.inputform.todoText.value == ""){
	 	window.alert("please enter exact what todo!");
		return false;
	}
	count++;
	list[count] = new feature(document.inputform.todoText.value,false,null,count);
	document.inputform.todoText.value = "";
	reload();
}
/*
function keyPress(){
	if (window.event.keyCode) keyCode = window.event.keyCode;
	else keyCode = window.event.which;
	character = String.fromCharCode(keyCode);
	if (character == '\n') submit();
}
*/