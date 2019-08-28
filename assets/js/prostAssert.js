/*
prostAssert (C) Ryan Wans 2019
Prost Ads
*/

const PROST = {
	a_message: 'Any Tampering With The PROST Element Is Monitored',
	__draft: function(a, b, c) {
		var _scss = {
			default:
				'[prost], .prost {height: 100px;width: 295px;background: #fff;padding: 8px;box-shadow: 0 2px 20px 0 rgba(0,0,0,.1);border-radius:5px;}' +
				'[prost-advert], .prost-advert {height: 100px; width: 130px; border-radius: 2px; left: 0;}' +
				'[prost-desc], .prost-desc {font-family: "Roboto", Helvetica, sans-serif;font-size:12px;margin: 8px 0; line-height: 1.35; color: #637381;font-weight: 300;width: 145px;right: 0; float: right;}' +
				'[prost-fine], .prost-fine {font-family: "Roboto", Helvetica, sans-serif;font-size:9.5px;color: #C5CDD0;margin: 9px 0;text-transform: uppercase;line-height: 1.25;font-weight: 500; width: 145px;right: 0; float: right; top:0;}',
			stripedef:
				'[prost], .prost {background: repeating-linear-gradient(135deg, #f9f9f9, #f9f9f9 5px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) 10px);height: 100px;width: 295px;padding: 8px;box-shadow: 0 2px 20px 0 rgba(0,0,0,.1);border-radius:5px;}' +
				'[prost-advert], .prost-advert {height: 100px; width: 130px; border-radius: 2px; left: 0;}' +
				'[prost-desc], .prost-desc {font-family: "Roboto", Helvetica, sans-serif;font-size:12px;margin: 8px 0; line-height: 1.35; color: #637381;font-weight: 300;width: 145px;right: 0; float: right;}' +
				'[prost-fine], .prost-fine {font-family: "Roboto", Helvetica, sans-serif;font-size:9.5px;color: #C5CDD0;margin: 9px 0;text-transform: uppercase;line-height: 1.25;font-weight: 500; width: 145px;right: 0; float: right; top:0;}',
			long:
				'[prost], .prost {height: 230px;width: 145px;background: #fff;padding: 8px;box-shadow: 0 2px 20px 0 rgba(0,0,0,.1);border-radius:5px; text-align: center;}' +
				'[prost-advert], .prost-advert {margin-top:3px;height: 100px; width: 130px; border-radius: 2px; left: 0;}' +
				'[prost-desc], .prost-desc {font-family: "Roboto", Helvetica, sans-serif;padding-top:12px;font-size:12px;margin: 8px 0; line-height: 1.35; color: #637381;font-weight: 300;width: 145px;bottom: 0; text-align: center;}' +
				'[prost-fine], .prost-fine {font-family: "Roboto", Helvetica, sans-serif;font-size:9.5px;color: #C5CDD0;margin: 9px 0;text-transform: uppercase;line-height: 1.25;font-weight: 500; width: 145px;bottom: 0; text-align: center;}',
			stripelon:
				'[prost], .prost {background: repeating-linear-gradient(135deg, #f9f9f9, #f9f9f9 5px, rgba(0,0,0,0) 5px, rgba(0,0,0,0) 10px);height: 230px;width: 145px;padding: 8px;box-shadow: 0 2px 20px 0 rgba(0,0,0,.1);border-radius:5px; text-align: center;}' +
				'[prost-advert], .prost-advert {margin-top:3px;height: 100px; width: 130px; border-radius: 2px; left: 0;}' +
				'[prost-desc], .prost-desc {font-family: "Roboto", Helvetica, sans-serif;padding-top:12px;font-size:12px;margin: 8px 0; line-height: 1.35; color: #637381;font-weight: 300;width: 145px;bottom: 0; text-align: center;}' +
				'[prost-fine], .prost-fine {font-family: "Roboto", Helvetica, sans-serif;font-size:9.5px;color: #C5CDD0;margin: 9px 0;text-transform: uppercase;line-height: 1.25;font-weight: 500; width: 145px;bottom: 0; text-align: center;}'
		};
			let _advert = document.querySelector('.prost');
		let af = document.createElement('style');
		let theme = _advert.getAttribute('type');
		if (theme === 'default') {
			af.innerText = _scss.default;
		} else if (theme === 'stripe-default') {
			af.innerText = _scss.stripedef;
		} else if (theme === 'long') {
			af.innerText = _scss.long;
		} else if (theme === 'stripe-long') {
			af.innerText = _scss.stripelon;
		} else {
			af.innerText = _scss.default;
			console['warn']('[RWAPI] Prost -> Invalid Ad Type Provided, Served Default!');
		}
		af.setAttribute('prost-component', '');
		document.body.appendChild(af);
		let _content =
			'<img alt="Prost Advertisements" prost-advert src="' +
			b +
			'" />' +
			'<div prost-desc>' +
			a +
			'<p prost-fine><b>ADS VIA PROST</b><p></div>';
		_advert.innerHTML = _content;
		_advert.setAttribute('onclick', 'javascript:PROST.__forward("' + c + '")');
		console['log']('%c[RWAPI] Prost Ads Loaded Successfully!', 'color: blue;');
	},
	__forward: function(a) {
		window.open(a + '?ref=prostads&placement=' + (window.location.host || window.location.origin));
	}
};
