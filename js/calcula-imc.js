var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = {
        nome: pacientes[i].querySelector(".info-nome").textContent,
        peso: pacientes[i].querySelector(".info-peso").textContent,
        altura: pacientes[i].querySelector(".info-altura").textContent,
        porc_gordura: pacientes[i].querySelector(".info-altura").textContent
    }

    if (validaPaciente(paciente)) {

        var imc = calculaImc(paciente.peso, paciente.altura);
        var result = validaImc(imc);

        pacientes[i].querySelector(".info-imc").textContent = imc;
        pacientes[i].querySelector(".info-result").textContent = result;

    } else {
        alert("Dados inválidos!!");
        pacientes[i].querySelector(".info-imc").textContent = "Dados inválidos";
        pacientes[i].querySelector(".info-result").textContent = "Dados inválidos";
        document.querySelector("#form-adiciona").reset();
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaImc(imc) {

    var resultado = null;

    if (imc < 17) {
        resultado = "Muito abaixo do peso";
        return resultado;
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = "Abaixo do peso";
        return resultado;
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado = "Peso normal";
        return resultado;
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = "Acima do peso";
        return resultado;
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = "Obesidade I";
        return resultado;
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = "Obesidade II";
        return resultado;
    } if (imc >= 40) {
        resultado = "Obesidade III";
        return resultado;
    }
}

function validaPeso(peso) {
    if(peso <=0 || peso > 500){
        return false;        
    } else{
        return true;
    }
}

function validaPaciente(paciente) {  
    
    if(validaPeso(paciente.peso)){
        return true;
    } else{
        return false;
    }
    
}
