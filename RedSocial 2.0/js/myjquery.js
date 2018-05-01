/* Scripts usando namespaces */

/* Declarando un namespace */
var heroes = heroes || {};

/* Aplicar el efecto de Hover (cuando el mouse pasa por encima) */
heroes.aplicarHover = function(elemento){
	elemento.hover(function () {
		var width = ($(this).width())*2;
		var height = ($(this).height())*2;

		$(this).width(width);
		$(this).height(height)

	},
	function () {
		var width = ($(this).width())*0.5;
		var height = ($(this).height())*0.5;

		$(this).width(width);
		$(this).height(height)
	}
	);
}

/* Enlaza los elementos a sus respectivos efectos*/
heroes.init = function() {

	heroes.aplicarHover($("body img"));
	/*TODO: aplicar el efecto Hover a los superamigos*/


   /*TODO: Colocar los siguientes efectos de click fuera del init, usando namespace */

	$( "button[name='invitacion']" ).click(function () {
		alert("Solicitaci�n enviada");
	});

	$( "button[name='enviarPalabras']" ).click(function () {
		var texto = $( "textarea[name='palabras']" ).val();
		alert("Enviando: "+texto);
	});
}


/* Cuando el documento carga, se llama la funci�n init*/
$( document ).ready(function() {
	heroes.init();
});
