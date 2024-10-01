class BoxMessage {
  constructor() {
    this.subscribers  = [];
  };

  subscribe(observer) {
    this.subscribers.push(observer);
  };  

  unSubscribe(observer) {
    this.subscribers.filter(obs => obs !== observer);
  };  

  notify(message){
    this.subscribers.forEach(observers => observers.update(message));
  };

  sendMessage(message) {
    console.log(`enviando mensagem: ${message}`);
    this.notify(message);
  };

};

class Subscriber  {
  constructor(name) {
    this.name = name;
  };

  update(message) {
    console.log(`${this.name} recebeu a mensagem: ${message}`);
  };
};

const boxMessage = new BoxMessage();

const chanealOne = new Subscriber('weslley');
const chanealTwo = new Subscriber ('ivan');

boxMessage.subscribe(chanealOne);
boxMessage.subscribe(chanealTwo);

boxMessage.sendMessage(`bom dia`);
boxMessage.sendMessage(`td bem?`);

