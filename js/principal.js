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

//MONITORANDO O EVENTO DE UM OBJETO E ATRIBUINDO UMA FUNÇAO, USANDO A FUNCÃO NOMEADA mostraMensagem
document.querySelector(".titulo").addEventListener("click", mostraMensagem);

//funcão nomeada
function mostraMensagem (){
    console.log("Função nomeada!!");
}

// MONITORANDO O EVENTO DE UM OBJETO E ATRIBUINDO UMA FUNÇAO, USANDO A FUNCÃO ANÔNIMA
// document.querySelector(".titulo").addEventListener("click", function(){
//   console.log("Funcção Anônima!!")
// })

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var porc_gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    var resultTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = porc_gordura;
    var calcImc = peso / (altura*altura);
    imcTd.textContent = calcImc.toFixed(2); 
    

    if(imcTd.textContent < 17){
        resultTd.textContent = "Muito abaixo do peso";
    } else if(imcTd.textContent > 17 && imcTd.textContent < 18.49){
        resultTd.textContent = "Abaixo do peso";
    } else if(imcTd.textContent > 18.5 && imcTd.textContent < 24.99){
        resultTd.textContent = "Peso normal";
    } else if(imcTd.textContent > 25 && imcTd.textContent < 29.99){
        resultTd.textContent = "Acima do peso";
    } else if(imcTd.textContent > 30 && imcTd.textContent < 34.99){
        resultTd.textContent = "Obesidade I";
    } else if(imcTd.textContent > 35 && imcTd.textContent < 39.99){
        resultTd.textContent = "Obesidade II";
    }if(imcTd.textContent > 40){
        resultTd.textContent = "Obesidade III";
    }


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(resultTd);



    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
});