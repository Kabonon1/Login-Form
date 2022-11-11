//main.js
const togglePassword = button =>{
	button.classlist.toggle ("showing")
	const input=document.getElementById("password")
	input.type= input.type == "password" ? "text" : "password"
}