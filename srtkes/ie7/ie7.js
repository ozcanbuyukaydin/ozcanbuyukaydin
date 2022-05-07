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
		'brct-mail-syh': '&#xe900;',
		'brct-ofis-syh': '&#xe903;',
		'brct-destek-syh': '&#xe910;',
		'brct-telefon-syh': '&#xe942;',
		'brct-adres-syh': '&#xe947;',
		'brct-mobil-syh': '&#xe958;',
		'brct-whatsapp-byz': '&#xea93;',
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
