function calcularMedia() {

    const nomeAluno = document.getElementById("nomeAluno").value;

    //posso usar: nomeAluno.'value' = porque agora é um input

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    let media = (nota1 + nota2 + nota3 + nota4)/4;
    document.getElementById("mediaAluno").value = media.toFixed(2);

    if (media >= 7) {
        document.getElementById("situacaoAluno").value = "Aprovado";
    } else if (media >= 5) {
        document.getElementById("situacaoAluno").value = "Recuperação";
    } else {
        document.getElementById("situacaoAluno").value = "Reprovado";
    }
}

