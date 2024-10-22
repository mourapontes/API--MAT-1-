function somarNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let soma = num1 + num2;
    document.getElementById("result-somar").innerHTML = "A soma é: " + soma;
}

function calcularMedia() {
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num5 = parseFloat(document.getElementById("num5").value);
    let num6 = parseFloat(document.getElementById("num6").value);
    let media = (num3 + num4 + num5 + num6) / 4;
    document.getElementById("result-media").innerHTML = "A média é: " + media.toFixed(2);
}

function calcularResto() {
    let num7 = parseInt(document.getElementById("num7").value);
    let num8 = parseInt(document.getElementById("num8").value);
    
    if (num8 === 0) {
        document.getElementById("result-resto").innerHTML = "Erro: Divisão por zero não é permitida.";
    } else {
        let resto = num7 % num8;
        document.getElementById("result-resto").innerHTML = "O resto da divisão é: " + resto;
    }
}

function calcularAumentoSalario() {
    let salarioAtual = parseFloat(document.getElementById("salario").value);
    let novoSalario = salarioAtual * 1.5;
    document.getElementById("result-aumento").innerHTML = "O novo salário é: R$ " + novoSalario.toFixed(2);
}

function calcularAreaTriangulo() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = (base * altura) / 2;
    document.getElementById("result-triangulo").innerHTML = "A área do triângulo é: " + area.toFixed(2);
}
