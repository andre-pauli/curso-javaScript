var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);

    var tabelaPaciente = criaTabelaPaciente();

    adicionaAtributosTabela(paciente, tabelaPaciente);   

    penduraTabela(tabelaPaciente)    

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(tabelaPaciente.pacienteTr);
});

//PEGANDO INFORMAÇÕES DO FORMULÁRIO
function obtemPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        porc_gordura: form.gordura.value+"%"        
    }
    return paciente;
}

//CRIANDO NOVA PACIENTE DINÂMICO
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
    
    if (!validaPeso(tabelaPaciente.pesoTd.textContent)) {
        tabelaPaciente.imcTd.textContent = "Peso inválido";
        tabelaPaciente.resultTd.textContent = "Peso inválido";
        tabelaPaciente.pacienteTr.classList.add("paciente-invalido");
    }

    else if (!validaAltura(tabelaPaciente.alturaTd.textContent)) {
        tabelaPaciente.imcTd.textContent = "Altura inválida";
        tabelaPaciente.resultTd.textContent = "Altura inválida";
        tabelaPaciente.pacienteTr.classList.add("paciente-invalido");
    }   
    else {

        tabelaPaciente.imcTd.textContent = calculaImc(tabelaPaciente.pesoTd.textContent, tabelaPaciente.alturaTd.textContent);
        tabelaPaciente.resultTd.textContent = validaImc(tabelaPaciente.imcTd.textContent);       
    }

}

function penduraTabela(tabelaPaciente){

    tabelaPaciente.pacienteTr.appendChild(tabelaPaciente.nomeTd);
    tabelaPaciente.pacienteTr.appendChild(tabelaPaciente.pesoTd);
    tabelaPaciente.pacienteTr.appendChild(tabelaPaciente.alturaTd);
    tabelaPaciente.pacienteTr.appendChild(tabelaPaciente.gorduraTd);
    tabelaPaciente.pacienteTr.appendChild(tabelaPaciente.imcTd);
    tabelaPaciente.pacienteTr.appendChild(tabelaPaciente.resultTd);
}




