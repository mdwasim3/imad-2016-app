var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 var articalOne= {
        title: 'Artical One',
        date: '10 oct 16',
        content: `
        <table border="1">
  <tr>
  <td> hello col 1 and row one </td>
  <td> hello col 1 row two </td>
  </tr>
  
</table>
<h3> hello buddy</h3>
<pre>
    
    hello    kuch to bolo.
</pre>
<h2>hi this is the color going to change</h2>
<marquee> hi this is moving </marquee>
<pre>Hello, it's me
I was wondering if after all these years you'd like to meet
To go over everything
They say that time's supposed to heal ya
But I ain't done much healing </pre>
<code>
Hello, can you hear me?
I'm in California dreaming about who we used to be
When we were younger and free
I've forgotten how it felt before the world fell at our feet</code>

There's such a difference between us
And a million miles `
     
    
 };
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/artical-one',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});
app.get('/artical-two',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'artical-two.html')); 
});
app.get('/artical-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
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
