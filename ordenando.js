const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const shuffle = (array, numTrocas) => {
    const n = array.length;

    // Realiza o número especificado de trocas
    for (let i = 0; i < numTrocas; i++) {
        // Gera índices aleatórios para a troca
        const j = Math.floor(Math.random() * n);
        const k = Math.floor(Math.random() * n);

        // Troca os elementos
        [array[j], array[k]] = [array[k], array[j]];
    }

    return array;
}

const bubbleSort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Troca os elementos
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

const selectionSort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        // Encontrar o índice do menor elemento
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // Trocar o menor elemento com o elemento na posição i
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
}

const quickSort = (array, left, right) => {
    if (left >= right) {
        return; // Condição de parada: subarray com um ou nenhum elemento
    }

    // Escolhendo o último elemento como pivô
    const pivot = array[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] <= pivot) {
            // Troca os elementos
            [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
            partitionIndex++;
        }
    }

    // Coloca o pivô na posição correta
    [array[partitionIndex], array[right]] = [array[right], array[partitionIndex]];

    // Chamadas recursivas para as partições
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
}

const partition = (array, low, high, pivot) => {
    let i = low - 1; // Índice do menor elemento

    for (let j = low; j < high; j++) {
        // Se o elemento atual for menor ou igual ao pivô
        if (array[j] <= pivot) {
            i++;
            // Troca os elementos
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Coloca o pivô na sua posição final
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1; // Retorna o índice da posição final do pivô
}