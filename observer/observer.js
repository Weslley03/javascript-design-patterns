class WeatherStation {
  constructor() {
    this.observers = [];
    this.temperature = 0;
  };

  subscribe(observer) {
    this.observers.push(observer);
  };

  unSubscribe(observer) {
    this.subscribe = this.observers.filter(obs => obs != observer);
  };

  notify() {
    this.observers.forEach(observer  => observer .update(this.temperature));
  };

  setTemperature(temperature) {
    this.temperature = temperature;
    this.notify();
  };
};

class DisplayDevice {
  update(temperature) {
    console.log(`temperatura atualizada para: ${temperature}°C`);
  };
};

const weatherStation = new WeatherStation();

const displayOne = new DisplayDevice();
weatherStation.subscribe(displayOne);

const displayTwo = new DisplayDevice();
weatherStation.subscribe(displayTwo);

weatherStation.setTemperature(25);

console.log('aguardando dois segundos...')

setTimeout(() => {
  weatherStation.setTemperature(12);
}, 2000);