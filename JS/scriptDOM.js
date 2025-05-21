// function calcularMedia() {
// 
//   const nomeAluno = document.getElementById("nomeAluno").value;
// 
//    //posso usar: nomeAluno.'value' = porque agora é um input
// 
//    const nota1 = parseFloat(document.getElementById("nota1").value);
//   const nota2 = parseFloat(document.getElementById("nota2").value);
//   const nota3 = parseFloat(document.getElementById("nota3").value);
//   const nota4 = parseFloat(document.getElementById("nota4").value);
// 
// let media = (nota1 + nota2 + nota3 + nota4)/4;
//  document.getElementById("mediaAluno").value = media.toFixed(2);
// 
//   if (media >= 7) {
//      document.getElementById("situacaoAluno").value = "Aprovado";
//  } else if (media >= 5) {
//      document.getElementById("situacaoAluno").value = "Recuperação";
//  } else {
//        document.getElementById("situacaoAluno").value = "Reprovado";
//     }
// }
// 

function executarTestes() {

    //Pegar conteudo de um elemento de formulario usando ID
    let conteudoInput = document.getElementById("nomeAluno").value;

    //pegar um elemento de um formulario usando NAME (sem value)
    let input = document.getElementsByName("nomeAluno"); 
    
    //pegar um elemento de um formulario usando CLASSE (somente a nota 4)
    let mensagemnota4 = document.getElementsByClassName("form__textbox")[4].value; //pega o primeiro elemento com essa classe

    //pegar um elemento de um formulario usando TAG (somente a nota 2)
    let mensagemnota2 = document.getElementsByTagName("input")[2].value; 

    //pegar conteúdo de um elemento tag <p> usando tagname
    //let resultado = document.getElementsByTagName("p")[0].textContent; 
    let resultado2 = document.getElementsByTagName("p")[0].innerHTML;

    //mudar o valor de um elemento de formulário - nomeAluno usando ID
    document.getElementById("nomeAluno").value = "Mariazinha";

    //mudar o valor de uma tag <p> para "Avaliação final do aluno"
    document.getElementsByTagName("p")[0].textContent = "Avaliação final do aluno";
    document.getElementsByTagName("p")[0].innerHTML = "Avaliação final do aluno";

    //inserindo <li>s em uma <ul> existente usando ID
    const ul = document.getElementById("list");

   // ul.innerHTML = "<li>Item 1</li>";
   // ul.innerHTML += "<li>Item 2</li>";

    //outra forma de inserir <li>s em uma <ul> existente
    let ul2 = document.getElementsByTagName("ul")[0]; //pega o primeiro elemento <ul> da página
    let li = document.createElement("li"); //cria um novo <li>
    li.innerHTML = "Item"; //adiciona conteúdo ao <li>
    ul2.appendChild(li); //adiciona um novo elemento filho na <ul> pai

    //mudando cor do elemento <p> usando propriedade style
    let p = document.getElementsByTagName("p")[0].style.color = "red"; //muda a cor do texto para vermelho
    //mudando a cor de fundo do formulario usando propriedade style
    let form = document.getElementsByTagName("form")[0].style.backgroundColor = "blue"; 

    //usando o querySelector para pegar o primeiro elemento existente na página
    //para id, tag ou classe
    document.querySelector("#nomeAluno");
    document.querySelector("p");
    document.querySelector(".form__textbox");

    //usando o querySelectorAll para pegar todos os elementos existentes na página, sempre retorna um array



    //alert(mensagemnota2);
    //alert(mensagemnota4);
    //alert(conteudoInput);
    //alert(resultado);
}
    

