let numeros = [1, 2, 3, 4, 5];
let pares = 0;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));

    if (numeros[i] % 2 === 0) {
        pares++;
    }
}

alert("Quantidade de pares: " + pares);
