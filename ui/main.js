console.log('Loaded!');




     
     
// variable counter 
    
 
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementBYId('count');
    span.innerHTML = counter.toString();
};