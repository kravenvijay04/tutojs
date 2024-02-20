var bookoverlay=document.querySelector(".overlay")
var bookpopup=document.querySelector(".pop-book")
var addbut1=document.querySelector(".but")
var addbut2=document.querySelector("#addbut")
var cancelbut1=document.querySelector("#cancelbut")
var bookshow=document.querySelector(".book")

addbut1.addEventListener("click",function(){
    bookoverlay.style.display="block"
    bookpopup.style.display="block"
})

cancelbut1.addEventListener("click",function(event){
    event.preventDefault()
    bookoverlay.style.display="none"
    bookpopup.style.display="none"
})

var booktitle=document.querySelector("#booktit")
var bookauthor=document.querySelector("#bookauth")
var bookdescription=document.querySelector("#bookdes")
addbut2.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bookcont")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${bookdescription.value}</p>
    <button class="delbut">delete</button>`
    bookshow.append(div)
})