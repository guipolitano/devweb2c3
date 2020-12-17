const mongoose = require("mongoose");
const PersonSchema = require("../Models/Person");

class PersonController {
  async create(request, response) {
    const Person = mongoose.model("Person", PersonSchema);
    const person = new Person({ ...request.body });
    person.save(function (err, result) {
      if (err) {
        return response.json({
          message: "Erro ao salvar Pessoa",
          stack: err,
          status: false,
        });
      }
      return response.json(result);
    });
  }
  async update(request, response) {
    const Person = mongoose.model("Person", PersonSchema);
    Person.updateOne(
      { _id: request.params.id },
      { ...request.body },
      function (err, result) {
        if (err) {
          return response.json({
            message: "Erro ao atualizar Pessoa",
            stack: err,
            status: false,
          });
        }
        return response.json(result);
      }
    );
  }
  async list(_, response) {
    const Person = mongoose.model("Person", PersonSchema);
    Person.find({}, function (err, result) {
      if (err) {
        return response.json({
          message: "Erro ao listar Pessoas",
          stack: err,
          status: false,
        });
      }
      return response.json(result);
    });
  }
  async delete(request, response) {
    const Person = mongoose.model("Person", PersonSchema);
    const now = new Date().toISOString();
    Person.updateOne(
      { _id: request.params.id },
      { active: false, deletedAt: now },
      function (err, result) {
        if (err) {
          return response.json({
            message: "Erro ao atualizar Pessoa",
            stack: err,
            status: false,
          });
        }
        return response.json(result);
      }
    );
  }
}

module.exports = PersonController;
