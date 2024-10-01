var module = (
  function() {
    var cont = 0;

    function increment() {
      cont++;
    };

    return {
      addCont: function() {
        increment();
      },

      getContValue: function() {
        return cont;
      },
    };
  })();

console.log(`first value ${module.getContValue()}`);

module.addCont();

console.log(`second value ${module.getContValue()}`);