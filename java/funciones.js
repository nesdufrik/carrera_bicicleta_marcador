function enviarDatosRegistro() {
	var ci_ciclista = document.getElementById("ci_ciclista").value;
	var nom_ciclista = document.getElementById("nom_ciclista").value;
	var club_ciclista = document.getElementById("club_ciclista").value;
	var dia = document.getElementById("dia").value;
	var mes = document.getElementById("mes").value;
	var anio = document.getElementById("anio").value;
	var nac_ciclista = anio + "-" + mes + "-" + dia;
	var sexo_ciclista = document.getElementById("sexo_ciclista").value;
	var telf_ciclista = document.getElementById("telf_ciclista").value;
	var cat_ciclista = document.getElementById("cat_ciclista").value;
	var nom_emergencia = document.getElementById("nom_emergencia").value;
	var telf_emergencia = document.getElementById("telf_emergencia").value;
	var seg_ciclista = document.getElementById("seg_ciclista").value;
	var num_ciclista = document.getElementById("num_ciclista").value;

	var url = "php/procesar_registro.php";
	
	$.ajax({
		type: "post",
		url: url,
		data: {
			ci_ciclista: ci_ciclista,
			nom_ciclista: nom_ciclista,
			club_ciclista: club_ciclista,
			nac_ciclista: nac_ciclista,
			sexo_ciclista: sexo_ciclista,
			telf_ciclista: telf_ciclista,
			cat_ciclista: cat_ciclista,
			nom_emergencia: nom_emergencia,
			telf_emergencia: telf_emergencia,
			seg_ciclista: seg_ciclista,
			num_ciclista: num_ciclista
		},
		success: function(datos) {
			$("#mostrardatos").html(datos);
		}
	});
}

function enviarIniciarCarrera() {
	var start = document.getElementById("start").value;
	var url = "php/iniciar_desafio.php";
	$.ajax({
		type: "post",
		url: url,
		data: {
			start: start
		},
		success: function(datos) {
			$("#mostrardatos").html(datos);
		}
	});
}

function enviarLlegada() {
	var marcar_llegada = document.getElementById("marcar_llegada").value;
	var num_ciclista = document.getElementById("num_ciclista").value;
	var url = "php/marcar_llegadas.php";
	$.ajax({
		type: "post",
		url: url,
		data: {
			marcar_llegada: marcar_llegada,
			num_ciclista: num_ciclista
		},
		success: function(datos) {
			$("#mostrardatos").html(datos);
		}
	});
}

function enviarMostrarPuestos() {
	var puesto = document.getElementById("puesto").value;
	var url = "php/puestos_top.php";
	$.ajax({
		type: "post",
		url: url,
		data: {
			puesto: puesto
		},
		success: function(datos) {
			$("#mostrardatos").html(datos);
		}
	});
}

function enviarMostrarGeneral() {
	var url = "php/puestos_general.php";
	$.ajax({
		url: url,
		success: function(datos) {
			$("#mostrardatos").html(datos);
		}
	});
}

function mostrarParticipantes() {
	var url = "php/participantes.php";
	$.ajax({
		url: url,
		success: function(datos) {
			$("#mostrardatos").html(datos);
		}
	});
}

$(document).ready(function() {
	$("#btn").click(function() {
		/* Single line Reset function executes on click of Reset Button */
		$("#form")[0].reset();
	});
});

$(document).ready(function(){
	$("#myInput").on("keyup", function() {
	  var value = $(this).val().toLowerCase();
	  $("#myTable tr").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	  });
	});
  });
