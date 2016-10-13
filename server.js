var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articales = {
  'artical-one': {
        title: 'Artical One',
        heading:'Artical  One',
        date: '10 oct 16',
        content: `
        	<p> This is my first Artical.  THIs is my first artical
					This is my first Artical.  THIs is my first artical
					This is my first Artical.  THIs is my first artical
				</p>
				<p>
				This is my first Artical.  THIs is my first articalThis is my first Artical.  THIs is my first articalThis is my first Artical.  THIs is my first artical
				</p>
				<p>
				This is my first Artical.  THIs is my first articalThis is my first Artical.  THIs is my first articalThis is my first Artical.  THIs is my first artical..
				</p>`
     
    
 },
 
 'artical-two' :{
      title: 'Artical Two',
        heading:'Artical  Two',
        date: '15 oct 16',
        content: `
        	<p> THis is the second content of the articles.. !!!
				</p>`
 },
  
 'artical-thre' : {
        title: 'Artical Three',
        heading:'Artical  Three',
        date: '20 oct 16',
        content: `
        	<p> THis is the THird content of the articles.. !!!
				</p>`
 }
 
};
 
 
 function createTemplate(data) {
 var title=data.title;
 var date=data.date;
 var heading=data.heading;
 var content=data.content;

var htmlTemplate= `
	<html>
 	<head>  <title>  
 			${title}
 			</title>
 			<meta name="viewpoint" content="width=device-width,initial-scale=1" />
 			<link href="/ui/style.css" rel="stylesheet" />
 	</head>
 	<body>
 			<hr/>
 			<h3>
 							${heading}
 			</h3>
 			 			<div>
 			 			${date}
 			 			</div>
 			 			<div>
 			 			${content}
 			 			</div>	
 			 			</div>
 			 		</body>
 			 		 </html>
 			 		  `;
 			 		  return htmlTemplate;
}


//counter example
var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalName',function(req,res){
    //articalName== artical-one
//articales[articalName]=={}content object for artical one

var articalName=req.params.articalName;     // this feature comes from expess frame work  

// this param TAG makes my life hell for few hours
 res.send(createTemplate (articales[articalName]));
});


var names[];
app.get('/submit-name', function(req,res) {
  
var name = req.query.name;
names.push(name);
res.send(JSON.stringify(names));

});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


