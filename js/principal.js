document.querySelector(".titulo").textContent = "Giovanna Nutricionista";	

var pacienteUm = document.querySelector("#primeiro");
var peso = pacienteUm.querySelector(".info-peso").textContent;
var altura = pacienteUm.querySelector(".info-altura").textContent;

if(peso < 0 || peso > 400){
    //console.log("Peso inválido!!");
    pacienteUm.querySelector(".info-imc").textContent = "Peso inválido";

} else if(altura < 0 || altura > 3){
    pacienteUm.querySelector(".info-imc").textContent = "Altura inválida";
} 
else{
    var imc = peso / (altura*altura);
    pacienteUm.querySelector(".info-imc").textContent = imc;
}