function onFocus(){
	var obj = document.inputform.todoText;
	if (obj.value == "type your todoList here!") obj.value = "";
}
function onBlur(){
	var obj = document.inputform.todoText;
	if (obj.value == "") obj.value = "type your todoList here!";
}
var todoCount,finishCount,count;
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
	var Finish = document.getElementById("Finsih");
	var t,f;
	todoCount = 0;
	finishCount = 0;
	for (i = 1;i <= count;i++){
		if (list[i].exist == false) continue;
		if (list[i].done == false){
			t = t + "<li> <input type=\"button\" onclick=\"update(" + i + ",true,true);\" value=\"finish\"><p>" + list[i].text + 
				"<\\p><input type=\"button\" onclick=\"update(" +i +",false,false);\" value = \"delete\"><\\li>";   
			todoCount++;
		}else{
			f = f + "<li> <input type=\"button\" onclick=\"update(" + i + ",false,true);\" value=\"unfinish\"><p>" + list[i].text + 
				"<\\p><input type=\"button\" onclick=\"update(" +i +",false,false);\" value = \"delete\"><\\li>";
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
		window.alert("please input the exactly things todo!!");
		return false;
	}

	count++;
	todoCount++;
	list[count] = feature(document.inputform.todoText.value,false,null,count);
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