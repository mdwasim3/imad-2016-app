console.log('Loaded!');




var e=document.getElementById("hello");
e.innerHTML="CHANGE HAPPENED";

//image moving function

var image=document.getElementByClassName("img-medium");
image.onClick = function()
{
    image.style.marginLeft= "100px" ;
}