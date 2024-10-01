class AppSetup {
  constructor() {
    if(AppSetup.instances) {
      return AppSetup.instances;
    };
    this.configuration = {
      appName: '',
      version: '',
    };
    AppSetup.instances = this;
  };

  alterAppName(appName){
    this.configuration.appName = appName;
  };

  alterVersion(version){
    this.configuration.version = version;
  };

  getConfiguration(){
    return this.configuration;
  };
};

const appOne = new AppSetup();
console.log(appOne.getConfiguration());  

appOne.alterAppName('Weslley-Dev');

const appTwo = new AppSetup();
console.log(appTwo.getConfiguration());  

appTwo.alterVersion('2.0.0');

console.log(appOne.getConfiguration());


