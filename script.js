let numeros = [];

// Gerar números aleatórios
function gerarNumeros() {
    let quantidade = Number(
        document.getElementById("quantidade").value
    );

    if (quantidade < 2 || quantidade > 1000 || !Number.isInteger(quantidade)) {
        alert("Digite um número entre 2 e 1000.");
        return;
    }

    numeros = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = Math.floor(Math.random() * 1000) + 1;
        numeros.push(numero);
    }

    document.getElementById("antes").textContent = numeros.join(", ");
    document.getElementById("depois").textContent = "Aguardando ordenação...";
    document.getElementById("tempo").textContent = "0 ms";
}

// Bubble Sort e medição de tempo
function ordenar() {
    if (numeros.length === 0) {
        alert("Gere os números primeiro!");
        return;
    }

    let lista = [...numeros];

    let inicio = performance.now();

    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length - i - 1; j++) {

            if (lista[j] > lista[j + 1]) {
                let temp = lista[j];

                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }

    let fim = performance.now();

    let tempoTotal = fim - inicio;

    document.getElementById("depois").textContent = lista.join(", ");
    document.getElementById("tempo").textContent =
        tempoTotal.toFixed(4) + " ms";
}