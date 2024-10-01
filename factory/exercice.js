class Vehicle {
  constructor(model, branch){
    this.model = model;
    this.branch = branch;
  };

  getAll(){
    return {
      vehicle: {
        model: this.model,
        branch: this.branch,
      },
    };
  };

  getBranch(){
    return this.branch;
  };

  getModel(){
    return this.model;
  };
  
};

class Factory {
  create(model, branch){
    if(model === 'moto'){
      return new Vehicle(
        model,
        branch
      );
    }else {
      return new Vehicle(
        model,
        branch
      );
    };
  };
};

const factory = new Factory();

const req = {
  model: 'moto',
  branch: 'Honda',
}

const { model, branch } = req;

const newVehicle = factory.create(model, branch);

console.log(newVehicle.getAll());