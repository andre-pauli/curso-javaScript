document.querySelector(".titulo").textContent = "Giovanna Nutricionista";	

var pacienteUm = document.querySelector("#primeiro");
var peso = pacienteUm.querySelector(".info-peso").textContent;
var altura = pacienteUm.querySelector(".info-altura").textContent;
var imc = peso / (altura*altura);
pacienteUm.querySelector(".info-imc").textContent = imc;

var pacienteDois = document.querySelector("#segundo");
var peso = pacienteDois.querySelector(".info-peso").textContent;
var altura = pacienteDois.querySelector(".info-altura").textContent;
var imc = peso / (altura*altura);
pacienteDois.querySelector(".info-imc").textContent = imc;

var pacienteTres = document.querySelector("#terceiro");
var peso = pacienteTres.querySelector(".info-peso").textContent;
var altura = pacienteTres.querySelector(".info-altura").textContent;
var imc = peso / (altura*altura);
pacienteTres.querySelector(".info-imc").textContent = imc;

var pacienteQuatro = document.querySelector("#quarto");
var peso = pacienteQuatro.querySelector(".info-peso").textContent;
var altura = pacienteQuatro.querySelector(".info-altura").textContent;
var imc = peso / (altura*altura);
pacienteQuatro.querySelector(".info-imc").textContent = imc;

var pacienteCinco = document.querySelector("#quinto");
var peso = pacienteCinco.querySelector(".info-peso").textContent;
var altura = pacienteCinco.querySelector(".info-altura").textContent;
var imc = peso / (altura*altura);
pacienteCinco.querySelector(".info-imc").textContent = imc;


