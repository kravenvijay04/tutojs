var name1 = document.getElementById("Name")
var age1 = document.getElementById("Age")
var gender1 = document.getElementById("Name")
var course1 = document.getElementById("Name")
var email = document.getElementById("Name")
var result = document.getElementById("res")
//var res1=result.textContent
function call(){
    var tr = document.createElement("tr")
    tr.innerHTML= "<td id='res1' onclick()='call()'></td>"
    tr.textContent="hello"
    result.append(tr)
    console.log(tr)
}