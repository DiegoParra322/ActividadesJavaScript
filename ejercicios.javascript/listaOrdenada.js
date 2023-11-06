let ordenarLista = [8, 1, 3, 5, 2];

for (let i = 0; i < ordenarLista.length - 1; i++) {
  let min = i;

  for (let j = i + 1; j < ordenarLista.length; j++) {
    if (ordenarLista[j] < ordenarLista[min]) {
      min = j;
    }
  }

  if (min !== i) {
    let temp = ordenarLista[i];
    ordenarLista[i] = ordenarLista[min];
    ordenarLista[min] = temp;
  }
}

console.log(ordenarLista);