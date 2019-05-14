document.querySelector("#adicionar-paciente").addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);

    var erros = validaPaciente(paciente);   

    if (erros.length <= 0 ) {
        var pacienteTr = criaTr(paciente);
        document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
        form.reset(); 
        var lista = document.querySelector("#erro-dados");
        lista.innerHTML = "";
    } else {
        exibeMensagensDeErro(erros);
    }
});

//PEGANDO INFORMAÇÕES DIGITADAS FORMULÁRIO
function obtemPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
        resultado: validaImc(calculaImc(form.peso.value, form.altura.value))
    }
    return paciente;
}

//CRIA UMA TR, CHAMA O MÉTODO QUE CRIA AS TD'S, VALIDA OS DADOS E VINCULA AS TD'S COM A TR
function criaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-Peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura+"%", "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(criaTd(paciente.resultado, "info-result"));

    return pacienteTr;
}

//RECEBE O CONTEÚDO E A CLASSE QUE CADA TD DEVE POSSUIR, E INCLUI OS MESMO NA TD.
function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function exibeMensagensDeErro(erros){

    var lista = document.querySelector("#erro-dados");
    lista.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro; 
        lista.appendChild(li);
    });
        
}

