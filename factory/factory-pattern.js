class Carr {
  constructor(branch) {
    this.branch = branch;
  };

  getbranch(){
    return this.branch;
  };
};

class CarFactory {
  createCar(type) {
    switch(type) {
      case 'Tesla':
        return new Carr('Tesla');
      case 'BMW':
        return new Carr('BMW');
      default:
        return new Carr('Unknown');
    };
  };
};

const factory = new CarFactory();

const myBMW = factory.createCar('BMW');

console.log(myBMW.getbranch());