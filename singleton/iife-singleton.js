let Singleton = (
  function() {
    var instances;

    function createInstance() {
      var object = new Object('im the object');
      return object
    };

    return {
      getInstance: function() {
        if(instances) {
          instances = createInstance();
        };
        return instances;
      }
    };
  }
)();

const testOne = Singleton.getInstance();
const testTwo = Singleton.getInstance();
console.log(`same instances? ${( testOne === testTwo )}`);
 