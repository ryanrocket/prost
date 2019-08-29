/*
prostListener (C) Ryan Wans 2019
Prost Ads
*/

// prevents more than one ad

(function() {
	const d = new XMLHttpRequest();
	const a = '/a/g',
		b = '/serviceworkers/prostAssert.js',
		c = 'http://ec2-100-24-22-69.compute-1.amazonaws.com',
		e = '/v3/amnt',
		f = '/v3/all';
	d.open('GET', c + e, false);
	d.send(null);
	let gg = JSON.parse(d.responseText),
		A = {
			a: function(bb) {
				// Randomly choose advert
				return Math.floor(Math.random() * (+bb - +0)) + +0;
			},
			b: function() {
				// Get Data and Img of Advert
				d.open('GET', c + f, false);
				d.send(null);
				let h = JSON.parse(d.responseText),
					j = gg.amnt,
					k = h[this.a(j)];
				let as = this.c(k);
				// ^ json of desc and link to image
				// now load asset dependency
				let af = document.createElement('script');
				af.setAttribute('src', c + '/serviceworkers/prostAssert.js');
				document.head.appendChild(af);
				// dep is now loaded and can take over
				// uses global functions to dev advert
				setTimeout(function() {
					PROST.__draft(as.ab, c + as.bb, as.ba);
				}, 100);
				this.d();
			},
			c: function(k) {
				// Cont
				let aa = '/apiv3/xmlrequest/campaign/getdata?campname=' + k;
				d.open('GET', c + aa, false);
				d.send(null);
				let ab = d.responseText;
				let bb = '/apiv3/xmlrequest/campaign/getimg?campname=' + k;
				let ba = '/apiv3/xmlrequest/campaign/gethref?campname=' + k;
				d.open('GET', c + ba, false);
				d.send(null);
				ba = d.responseText;
				return { ab, bb, ba };
			},
			d: function() {
				let a = new Date();
				document.cookie('__prost_reg=' + a);
			}
		};
	// event
	A.b();
})();
