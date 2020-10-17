'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Juan Diego Mejia Robby",
	profesion: "Tecnico en Sistemas",
	correo: "juandiegorobby@hotmail.com",
	telefono: "+57 311 8233555",
	perfil: "Tecnico en Sistemas . Habilidades para trabajar en equipo para mantenimiento de equipos, supervisión, reparación, automatización de tareas sobre los servidores y sus sistemas operativos y aplicaciones y actualmente estudiando analisis y desarrollo de informacion.",
	habilidades: {
		comunicativas:['Iniciativa, ','Responsabilidad, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Orden'],
		gestion: ['Liderazgo, ','Evaluación de Proyectos, ','Responsabilidad, ','Estrategias de Gestión, ','Análisis para toma de Decisiones'],
		tecnicas: ['Tecnico en Sistemas']
	},
	hobbies: ['Escuchar Música, ', 'Ver Series, ', 'Video-Juegos, ', 'Comer']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}