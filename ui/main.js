

var button = document.getElementById('counter');

button.onclick = function() {
	// create the request

          var request = new XMLHttpRequest();

	// Capture the response and store it in a variable

	    request.onreadystatechange = function(){
		if (request.readyState === XMLHttpRequest.DONE){
	//Take some action
		if(request.status === 200){
			var counter = request.responseText;
			var span1 = document.getElementById('count1');
 			span1.innerHTML = counter.toString();

		}
	     }
	// Not done yet
	};
	// Make the request
		request.open('GET','http://mdwasim3.imad.hasura-app.io', true);
		request.send(null); 


};




var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()	{
	var names = ['name1','name2','name3','name4'];
	var list = '';
	for(var i = 0; i< names.length; i++){
	list += '<li>' + names[i] + '</li>' ;
	}
	var ul = document.getElementById('namelist');
	ul.innerHTML = list;

	
};

