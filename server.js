var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articalOne= {
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
     


};
 
 
 function createTemplate(data) {
 var title=data.title;
 var heading=data.heading;
 var date=data.date;
 var content=data.content;

var htmlTemplate= `
	<html>
 	<head>  <title>  
 			${title}
 			</title>
 			<meta name="viewpoint" content="width=device-width,initial-scale=1" />
 			<link href="/ui/style.css" rel="stylesheet" />
 			</div>
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




app.get('/artical-one',function(req,res){
 res.send(createTemplate(articalOne));
});

app.get('/artical-two',function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'artical-two.html')); 
});
app.get('/artical-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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
