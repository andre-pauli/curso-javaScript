var titulo = document.querySelector(".titulo").textContent;
titulo = "Giovanna Nutricionista";
document.querySelector(".titulo").textContent = titulo;

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    
    if (peso < 0 || peso > 400) {
        //console.log("Peso inválido!!");
        pacientes[i].querySelector(".info-imc").textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");     

    } else if (altura < 0 || altura > 3) {
        pacientes[i].querySelector(".info-imc").textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido"); 
    }
    else {
        var imc = peso / (altura * altura);
        pacientes[i].querySelector(".info-imc").textContent = imc.toFixed(2);

        if(imc < 17){
            pacientes[i].querySelector(".info-result").textContent = "Muito abaixo do peso";
        } else if(imc > 17 && imc < 18.49){
            pacientes[i].querySelector(".info-result").textContent = "Abaixo do peso";
        } else if(imc > 18.5 && imc < 24.99){
            pacientes[i].querySelector(".info-result").textContent = "Peso normal";
        } else if(imc > 25 && imc < 29.99){
            pacientes[i].querySelector(".info-result").textContent = "Acima do peso";
        } else if(imc > 30 && imc < 34.99){
            pacientes[i].querySelector(".info-result").textContent = "Obesidade I";
        } else if(imc > 35 && imc < 39.99){
            pacientes[i].querySelector(".info-result").textContent = "Obesidade II";
        }if(imc > 40){
            pacientes[i].querySelector(".info-result").textContent = "Obesidade III";
        }
    }       
}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    alert("Olá, fui clicado!!");
}

