console.log('Loaded!');




var e=document.getElementById("hello");
e.innerHTML="CHANGE HAPPENED";
var marginLeft = 0;


var v1 = document.getElementById("myimg");
     v1.onclick = function()
        {
            var interval = setInterval(moveRight,100);
        };
        
     function moveRight(){
         marginLeft = marginLeft + 1 ;
         v1.style.marginLeft = marginLeft + 'px';
     }
     
     
// variable counter 
    
 
var counter; 
var button = document.getElementById('counter');
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementBYId('count');
    span.innerHTML = counter.toString();
};