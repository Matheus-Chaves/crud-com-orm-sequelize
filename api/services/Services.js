//Service irá fazer a interface com o modelo
const database = require("../models");

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }

  async pegaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } });
  }

  async criaRegistro(dados) {}

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo].update(dadosAtualizados, {
      where: { id: id },
      transacao,
    });
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModelo].update(dadosAtualizados, {
      where: { ...where },
      transacao,
    });
  }

  async apagaRegistro(id) {}
}

module.exports = Services;
