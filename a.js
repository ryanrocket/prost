var express = require('express'),
	multer = require('multer'),
	fs = require('fs'),
	app = express();

var camps = [];

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', function(req, res) {
	res.redirect('https://ryanwans.com/prostads');
	res.end();
});

app.get('/apiv3/xmlrequest/campaign/getimg', function(req, res) {
	let camp = req.query.campname;
	let rdata = fs.readFileSync('./assets/config/ads.json'),
		fdata = JSON.parse(rdata);
	if (fdata['camps'].includes(camp)) {
		let filename = fdata['content'][camp].mnImg;
		let a = filename.split('.'),
			d = 'image';
		if (a[1] === 'png') {
			d = 'image/png';
		}
		if (a[1] === 'jpeg') {
			d = 'image/jpeg';
		}
		res.setHeader('Content-Type', d);
		res.sendFile('./assets/img/' + filename, { root: __dirname });
	} else {
		res.end('fatal external error [->] invalid campaign name and or id');
	}
});
app.get('/apiv3/xmlrequest/campaign/getdata', function(req, res) {
	let camp = req.query.campname;
	let rdata = fs.readFileSync('./assets/config/ads.json'),
		fdata = JSON.parse(rdata);
	if (fdata['camps'].includes(camp)) {
		res.setHeader('Content-Type', 'application/json');
		res.send(fdata['content'][camp].cDescription);
	} else {
		res.end('fatal external error [->] invalid campaign name and or id');
	}
});
app.get('/apiv3/xmlrequest/campaign/gethref', function(req, res) {
	let camp = req.query.campname;
	let rdata = fs.readFileSync('./assets/config/ads.json'),
		fdata = JSON.parse(rdata);
	if (fdata['camps'].includes(camp)) {
		res.setHeader('Content-Type', 'application/json');
		res.send(fdata['content'][camp].campURL);
	} else {
		res.end('fatal external error [->] invalid campaign name and or id');
	}
});

app.get('/serviceworkers/prostAssert.js', function(req, res) {
	res.sendFile('./assets/js/prostAssert.js', { root: __dirname });
});
app.get('/runtime/prostListener.js', function(req, res) {
	res.sendFile('./assets/js/prostListener.js', { root: __dirname });
});
app.get('/a/g', function(req, res) {
	console['log'](req.query.url);
	res.send(null);
});
app.get('/v3/amnt', function(req, res) {
	let rdata = fs.readFileSync('./assets/config/ads.json'),
		fdata = JSON.parse(rdata);
	res.send('{"amnt": ' + fdata.total + '}');
});
app.get('/v3/all', function(req, res) {
	let rdata = fs.readFileSync('./assets/config/ads.json'),
		fdata = JSON.parse(rdata);
	res.json(fdata.camps);
});

app.get('/*', function(req, res) {
	res.end("[RWND] Module 'RWPortal' Said -> External Error (Code 404 or Not Found)\nDone\ndone");
});

app.listen(8080, () => {
	console['log']('PROST AD NETWORK SERVER RUNNING ON PORT 8080\ndone');
});
