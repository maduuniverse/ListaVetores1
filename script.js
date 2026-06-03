let numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
    soma += numeros[i];
}

    alert("Soma = " + soma);