"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        scope: { status: "confirmado" }, //é possível criar SEM o escopo, porém aqui ele serve para filtrar o resultado (como um 'where')
        as: "aulasMatriculadas", //função a ser chamada
      });
    }
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          funcaoValidadora: function (dado) {
            if (dado.length < 3)
              throw new Error("O campo nome deve ter mais que 3 caracteres!");
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "E-mail inválido.",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
      paranoid: true,
      defaultScope: {
        //Define um escopo padrão, será aplicado nas queries
        where: { ativo: true },
      },
      scopes: {
        //define escopos que precisam ser chamados para serem utilizados
        todos: { where: {} },
      },
    }
  );
  return Pessoas;
};
