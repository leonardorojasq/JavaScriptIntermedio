function factorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return factorial(numero - 1) * numero;
  }
}
console.log(factorial(7));
