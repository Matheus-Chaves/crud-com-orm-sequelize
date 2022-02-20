//a fim de separar ainda mais as responsabilidades, cria-se services individuais para cada model
const Services = require("./Services");

class TurmasServices extends Services {
  constructor() {
    super("Turmas");
  }

  //métodos específicos do controlador de turmas
}

module.exports = TurmasServices;
