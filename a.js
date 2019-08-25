var express = require('express'),
multer = require('multer'), fs = require('fs'),
app = express();

app.use(function(req, res, next) {
    // MIDDLE
    next()
});

app.get('/', function(req, res) {
    res.redirect('https://ryanwans.com/prostads');
    res.end();
});

app.get('/apiv3/xmlrequest/campaign/getimg', function(req, res) {
    let camp = req.query.campname;
    let rdata = fs.readFileSync('./assets/config/ads.json'),
        fdata = JSON.parse(rdata);
    if(fdata['camps'].includes(camp)) {
        let filename = fdata['content'][camp].mnImg;
        let a = filename.split("."),d="image";
        if(a[1] === "png") {d="image/png"}
        if(a[1] === "jpeg") {d="image/jpeg"}
        res.setHeader('Content-Type', d);
        res.sendFile('./assets/img/'+filename, {root:__dirname});
    }else{res.end("fatal external error [->] invalid campaign name and or id")}
});
app.get('/apiv3/xmlrequest/campaign/getdata', function(req, res) {
    let camp = req.query.campname;
    let rdata = fs.readFileSync('./assets/config/ads.json'),
        fdata = JSON.parse(rdata);
    if(fdata['camps'].includes(camp)) {
        res.setHeader('Content-Type', 'application/json');
        res.send(fdata['content'][camp].cDescription);
    } else{res.end("fatal external error [->] invalid campaign name and or id")}
});

app.get('/*', function(req, res) {
    res.end("[RWND] Module 'RWPortal' Said -> External Error (Code 404 or Not Found)");
})

app.listen(8080);
