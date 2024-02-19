var name1 = document.getElementById("Name")
var age1 = document.getElementById("Age")
var gender1 = document.getElementById("gender")
var course1 = document.getElementById("course")
var email = document.getElementById("mail")
var result = document.getElementById("res")
//var res1=result.textContent
function call(){
    var tr = document.createElement("tr")
    tr.innerHTML=`<td>${name1.value}</td>
    <td>${age1.value}</td>
    <td>${gender1.value}</td>
    <td>${course1.value}</td>
    <td>${email.value}</td>
    <td><button onclick="delete1(event)" id="button1" >delete</button></td>` 
    result.append(tr)
}
function delete1(event){
    var close=event.target.closest("tr")
    close.remove()
}