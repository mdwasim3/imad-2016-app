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
         marginLeft = marginLeft + 10 ;
         v1.style.marginLeft = marginLeft + 'px';
     }
 
