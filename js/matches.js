var mql = window.matchMedia('all and (max-width: 990px)');
if (mql.matches) {
	$("section.d-none").removeClass('d-none');
	$("section").css({
		paddingBottom: '0px',
	});;
}
var mql = window.matchMedia('all and (min-width: 990px)');
if (mql.matches) {
	$("section").css({
		paddingBottom: '0px',
	});;
}