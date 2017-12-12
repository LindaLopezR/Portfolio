$(function() {
	var t = {
	  "Elaborado por Linda López": {
	    pt: "Download plugin"
		},
		"translate to English": {
	      pt: "traduzir para InglÃªs"
	    },
	    "translate to Portuguese": {
	      pt: "traduzir para PortuguÃªs"
	    },
	    step6: {
	      en: "try it",
	      pt: "experimentar"
	    },
	}
	var _t = $('body').translate({lang: "en", t: t});
	var str = _t.g("translate");
	console.log(str);


	$(".lang_selector").click(function(ev) {
	var lang = $(this).attr("data-value");
	_t.lang(lang);

	console.log(lang);
	ev.preventDefault();
	});
})