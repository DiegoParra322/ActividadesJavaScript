const numeroMayor = [1, 3, 6, 29, 26, 34, 2];
let numMayor = numeroMayor[0]; 

for (let i = 0; i < numeroMayor.length; i++) {
  if (numeroMayor[i] > numMayor) {
    numMayor = numeroMayor[i];
  }
}

console.log(numMayor);
