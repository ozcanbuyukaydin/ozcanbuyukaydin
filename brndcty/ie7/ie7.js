/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'brct-ws\'">' + entity + '</span>' + html;
	}
	var icons = {
		'brct-babet-fl': '&#xe901;',
		'brct-bot-fl': '&#xe902;',
		'brct-canta-fl': '&#xe904;',
		'brct-deniz-ayakkabisi-fl': '&#xe905;',
		'brct-gozluk-fl': '&#xe906;',
		'brct-panduf-fl': '&#xe907;',
		'brct-sandalet-fl': '&#xe908;',
		'brct-sneaker-fl': '&#xe909;',
		'brct-topuklu-ayakkabi-fl': '&#xe90a;',
		'brct-yagmurluk-fl': '&#xe90b;',
		'brct-mail-fl': '&#xe900;',
		'brct-ofis-fl': '&#xe903;',
		'brct-destek-fl': '&#xe910;',
		'brct-telefon-fl': '&#xe942;',
		'brct-adres-fl': '&#xe947;',
		'brct-mobil-fl': '&#xe958;',
		'brct-whatsapp-fl': '&#xea93;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/brct-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
