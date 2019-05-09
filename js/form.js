var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);
    var pacienteTr = criaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    limpaform(form);
});

//PEGANDO INFORMAÇÕES DO FORMULÁRIO
function obtemPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        porc_gordura: form.gordura.value + "%",
        imc: calculaImc(form.peso.value, form.altura.value),
        resultado: validaImc(calculaImc(form.peso.value, form.altura.value))
    }
    return paciente;
}

//CRIANDO NOVA PACIENTE DINÂMICO
function criaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = criaTd(paciente.nome, "info-nome");
    var pesoTd = criaTd(paciente.peso, "info-Peso");
    var alturaTd = criaTd(paciente.altura, "info-altura");
    var gorduraTd = criaTd(paciente.porc_gordura, "info-gordura");



    if (!validaPeso(pesoTd.textContent)) {
        var imcTd = criaTd("Peso inválido", "info-imc");
        var resultTd = criaTd("Peso inválido", "info-result");
        pacienteTr.classList.add("paciente-invalido");
    }

    else if (!validaAltura(alturaTd.textContent)) {
        var imcTd = criaTd("Altura inválida", "info-imc");
        var resultTd = criaTd("Altura inválida", "info-result");
        pacienteTr.classList.add("paciente-invalido");
    }
    else {
        var imcTd = criaTd(paciente.imc, "info-imc");
        var resultTd = criaTd(paciente.resultado, "info-result");
    }

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(resultTd);

    return pacienteTr;
}

function limpaform(form) {
    form.nome.value = null;
    form.altura.value = null;
    form.peso.value = null;
    form.gordura.value = null;
}

function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}