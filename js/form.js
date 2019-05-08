var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);

    var tabelaPaciente = criaTabelaPaciente();

    adicionaAtributosTabela(paciente, tabelaPaciente);

    adicionaAtributosTabela(paciente, tabelaPaciente);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(resultTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        porc_gordura: form.gordura.value,
        imc: calculaImc(peso, altura),
        resultado: validaImc(imc)
    }

    return paciente;

}

function criaTabelaPaciente() {

    var tabela = {
        pacienteTr: document.createElement("tr"),
        nomeTd: document.createElement("td"),
        pesoTd: document.createElement("td"),
        alturaTd: document.createElement("td"),
        gorduraTd: document.createElement("td"),
        imcTd: document.createElement("td"),
        resultTd: document.createElement("td")
    }
    return tabela;
}

function adicionaAtributosTabela(paciente, tabelaPaciente) {
    tabelaPaciente.nomeTd.textContent = paciente.nome;
    tabelaPaciente.pesoTd.textContent = paciente.peso;
    tabelaPaciente.alturaTd.textContent = paciente.altura;
    tabelaPaciente.gorduraTd.textContent = paciente.porc_gordura;
}

function validaPaciente(paciente, tabelaPaciente) {
    
    if (!validaPeso(paciente.peso)) {
        tabelaPaciente.imcTd.textContent = "Peso inválido";
        tabelaPaciente.resultTd.textContent = "Peso inválido";
        tabelaPaciente.classList.add("paciente-invalido");
    }

    else if (!validaAltura(altura)) {
        tabelaPaciente.imcTd.textContent = "Altura inválida";
        tabelaPaciente.resultTd.textContent = "Altura inválida";
        tabelaPaciente.classList.add("paciente-invalido");
    }
    else {
        tabelaPaciente.imcTd.textContent = imc;
        tabelaPaciente.resultTd.textContent = resultado;
    }

}




