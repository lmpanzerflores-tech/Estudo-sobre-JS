function mostrarNome() {
    var nome = prompt("Digite o seu nome: ");
    if (nome) {
        document.getElementById("resultado").textContent = "Ola, " + nome + "!";
    }
}

function somarNumeros() {
    var n1 = parseFloat(prompt("Digite o primeiro numero:"));
    var n2 = parseFloat(prompt("Digite o segundo numero:"));
    var soma = n1 + n2;
    document.getElementById("resultado").textContent = "Resultado da soma: " + soma;
}

function calcularMedia() {
    var n1 = parseFloat(prompt("Digite a primeira nota:"));
    var n2 = parseFloat(prompt("Digite a segunda nota:"));
    var n3 = parseFloat(prompt("Digite a terceira nota:"));
    var media = (n1 + n2 + n3) / 3;
    var situacao = media >= 6 ? "Aprovado" : "Reprovado";
    document.getElementById("resultado").textContent =
        "Media: " + media.toFixed(2) + " - " + situacao;
}

function verificarMaioridade() {
    var idade = parseInt(prompt("Digite a sua idade:"));
    if (idade >= 18) {
        document.getElementById("resultado").textContent = "Maior de idade.";
    } else {
        document.getElementById("resultado").textContent = "Menor de idade.";
    }
}

function calcularDesconto() {
    var valor = parseFloat(prompt("Digite o valor do produto (R$):"));
    var desconto = parseFloat(prompt("Digite o percentual de desconto (%):"));
    var valorFinal = valor - (valor * desconto / 100);
    document.getElementById("resultado").textContent =
        "Produto: R$ " + valor.toFixed(2) +
        " | Desconto: " + desconto + "%" +
        " | Valor final: R$ " + valorFinal.toFixed(2);
}

function verificarNumero() {
    var num = parseFloat(prompt("Digite um numero:"));
    if (num > 0) {
        document.getElementById("resultado").textContent = "O numero " + num + " e positivo.";
    } else if (num < 0) {
        document.getElementById("resultado").textContent = "O numero " + num + " e negativo.";
    } else {
        document.getElementById("resultado").textContent = "O numero e zero.";
    }
}

function calcularIMC() {
    var peso = parseFloat(prompt("Digite o seu peso (kg):"));
    var altura = parseFloat(prompt("Digite a sua altura (ex: 1.75):"));
    var imc = peso / (altura * altura);
    document.getElementById("resultado").textContent = "IMC: " + imc.toFixed(2);
}

function alterarTexto() {
    document.getElementById("mensagem").textContent = "Texto alterado pelo JavaScript!";
    document.getElementById("resultado").textContent = "O texto do paragrafo foi alterado.";
}

function alterarCorFundo() {
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("resultado").textContent = "Cor de fundo alterada para azul claro.";
}

function boasVindas() {
    var nome = prompt("Qual e o seu nome?");
    if (nome) {
        document.getElementById("resultado").textContent = "Seja bem-vindo, " + nome + "!";
    }
}