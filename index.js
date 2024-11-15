const { response, request } = require('express');

express = require('express');
app = express();


app.use(express.json());


app.get('/', function (req, res) {
    res.send("hello world")
});

app.get('/morning', function (req, res) {
    const mgs =req.query.notice;
    console.log(msg)
    response.send("responce from sarver:"+mgs);
});

app.get('/night', function (req, res) {
    res.send(" good night sir")
});

app.post('/evning',function ( req,res){
    console.log (request.body.notice);
    res.send(" this is responce for post");
});


app.listen(3000, () => {
    console.log("server started on port 3000.");
});