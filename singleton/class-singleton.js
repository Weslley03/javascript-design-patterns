class Logger {
  constructor() {
    if(Logger.instances){
      return Logger.instances
    }
    this.log = [];
    Logger.instances = this;
  };

  addLog(message) {
    this.log.push(message);
  };

  showLog() {
    console.log(this.log);
  };
};

const testClassOne = new Logger();
testClassOne.addLog(`add *testClassOne* message`);

testClassOne.showLog();

const testClassTwo = new Logger();
testClassTwo.addLog(`add *testClassTwo* message`);

testClassTwo.showLog();

console.log(`same instances? ${ (testClassOne === testClassTwo) }`);