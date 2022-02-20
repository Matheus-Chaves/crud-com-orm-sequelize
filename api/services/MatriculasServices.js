//a fim de separar ainda mais as responsabilidades, cria-se services individuais para cada model
const Services = require("./Services");

class MatriculasServices extends Services {
  constructor() {
    super("Matriculas");
  }

  //métodos específicos do controlador de Matriculas
}

module.exports = MatriculasServices;
