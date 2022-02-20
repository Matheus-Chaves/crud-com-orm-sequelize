//a fim de separar ainda mais as responsabilidades, cria-se services individuais para cada model
const Services = require("./Services");

class NiveisServices extends Services {
  constructor() {
    super("Niveis");
  }

  //métodos específicos do controlador de Niveis
}

module.exports = NiveisServices;
