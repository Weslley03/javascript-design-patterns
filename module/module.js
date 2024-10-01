var module = (
  function () {
    var contador = 0;

    function increment() {
      contador++;
    };

    return {
      addContador: function () {
        increment();
      },

      getContador: function () {
        return contador;
      },
    }
  })();

console.log(`valor primeira chamada: ${module.getContador()}`);

module.addContador();

console.log(`valor segunda chamada: ${module.getContador()}`);