function verificarRespuestas(){

	var total = 8;
	var puntos = 0;

	var myForm = document.forms["quizForm"];
	var respuestas = ["yes, there are", "no, there aren´t", "no, there isn´t", "yes, there is", "yes, there are", "yes, there is", "no, there aren´t", "no, there isn´t"];

	for(var i = 1; i <= total; i++){
		if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
			alert("Por favor responde a la pregunta " + i);
			return false;
		}else{
			if(myForm["p" + i].value === respuestas[i - 1]){
				puntos++;
			}
		}
	}

	var resultado = document.getElementById("resultado");
	resultado.innerHTML = '<h3>Obtuviste <span>'+ puntos +'</span> de <span>'+ total +' puntos</span></h3>';

	return false;
}