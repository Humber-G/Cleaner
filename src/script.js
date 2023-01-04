const cleaner = (array) =>
  array.reduce((acumulador, elementoIterado) => {
    if (elementoIterado) {
      acumulador.push(elementoIterado);
    }
    return acumulador;
  }, []);

const resultado = cleaner([1, undefined, null, 0, 2, 3]);
console.log(resultado);

document.querySelector('#header').innerHTML = resultado;
