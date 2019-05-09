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

//PEGANDO INFORMAÇÕES DIGITADAS FORMULÁRIO
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

//CRIA UMA TR, CHAMA O MÉTODO QUE CRIA AS TD'S, VALIDA OS DADOS E VINCULA AS TD'S COM A TR
function criaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    if (!validaPeso(criaTd(paciente.peso, "info-Peso").textContent)) {
        pacienteTr.appendChild(criaTd("Peso inválido", "info-imc"));
        pacienteTr.appendChild(criaTd("Peso inválido", "info-result"));
        pacienteTr.classList.add("paciente-invalido");
    }

    else if (!validaAltura(criaTd(paciente.altura, "info-altura").textContent)) {
        pacienteTr.appendChild(criaTd("Altura inválida", "info-imc"));
        pacienteTr.appendChild(criaTd("Altura inválida", "info-result"));
        pacienteTr.classList.add("paciente-invalido");
    }

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-Peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.porc_gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(criaTd(paciente.resultado, "info-result"));

    return pacienteTr;
}

//LIMPA TODOS OS CAMPOS DO FORMULÁRIO
function limpaform(form) {
    form.nome.value = null;
    form.altura.value = null;
    form.peso.value = null;
    form.gordura.value = null;
}

//RECEBE O CONTEÚDO E A CLASSE QUE CADA TD DEVE POSSUIR, E INCLUI OS MESMO NA TD.
function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}