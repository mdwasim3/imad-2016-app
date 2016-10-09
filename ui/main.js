console.log('Loaded!');




var e=document.getElementById("hello");
e.innerHTML="CHANGE HAPPENED";

//image moving function

var image=document.getElementsById("image");
image.onClick = function()
{
    image.style.marginLeft= "100px" ;
}