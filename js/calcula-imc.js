var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var campoImc = pacientes[i].querySelector(".info-imc");
    var campoResult = pacientes[i].querySelector(".info-result");


    if (!validaPeso(peso)) {
        campoImc.textContent = "Peso inválido";
        campoResult.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");
    }

    else if (!validaAltura(altura)) {
        campoImc.textContent = "Altura inválida";
        campoResult.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
    }
    else {
        var imc = calculaImc(peso, altura);
        campoImc.textContent = imc;

        var result = validaImc(imc);
        campoResult.textContent = result;
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
    if (peso < 0 || peso > 400) {
        return false;
    }
    return true;
}

function validaAltura(altura) {
    if (altura < 0 || altura > 3) {
        return false;
    }
    return true;
}
