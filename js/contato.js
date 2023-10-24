"use strict"
/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereço = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagem = formulario.querySelector("#status");

//Seleção do campo telefone usando JS PURO
const campoTelefone = formulario.querySelector("#telefone");

//Seleção do campo telefone usando JQuery
//const campoTelefone = $("#telefone");

//Ativando a máscara para o telefone e cep
$(campoTelefone).mask("(00) 0000-0000"); //Exemplo: (11) 2135-0300
$(campoCep).mask ("00000-000"); // Exemplo: 03639-000


// Detectando o evento de click no botão Buscar

botaoBuscar.addEventListener("click", async function(event){
    event.preventDefault();

    //Verificando se o CEP NÃO tem 8 dígitos. O operador !== significa "diferente de".

    let cep; // undefined

    if(campoCep.value.length !== 8){
    //Alerte o usuário sobre o erro de digitação
    mensagem.textContent = "Digite um CEP válido!";
    mensagem.style.color = "purple";
    

    //PARE A EXECUÇÃO
    return;


    } else {
        //Caso contrário (ou seja, tem 8 dígitos), guarde o valor
        cep = campoCep.value;
    }

    /* AJAX -> Técnica de comunicação assíncrona para acessar uma API (www.viacep.com.br) */

    //Etapa 1: Preparar a URL da API com o CEP digitado
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    //Etapa 2: Acessar a API (com a URL) e aguardar o retorno dela
    const resposta = await fetch(url);

    console.log(resposta);

    //Etapa 3: Extrair os dados da resposta em formato JSON

    const dados = await resposta.json();

    console.log(dados);

    //Etapa 4: lidar com os dados de resposta (em caso de erro ou sucesso)
    if( "erro" in dados){
        mensagem.textContent = "CEP inexistente!";
        mensagem.style.color = "red";
        
    } else {
        mensagem.textContent = "CEP encontrado!";
        mensagem.style.color = "blue";

        const exemplos = document.querySelectorAll(".exemplo");

        campoEndereço.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoCidade.value = dados.uf;
         
    }
});
