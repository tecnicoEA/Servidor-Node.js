
var sys = require ('sys'),
url = require('url'),
http = require('http'),
qs = require('querystring');

http.createServer(function (req, res) {

	if(req.method=='POST'){
		var body='';
		req.on('data', function (data){
			body +=data;
		});
		req.on('end',function(){
			var POST = qs.parse(body);
			console.log(POST);
		});
		res.end("yeah");
	}
	else if(req.method=='GET') {
		var url_parts = url.parse(req.url,true);
		console.log(url_parts.query);
	}
}).listen(8080, "192.168.1.100");
