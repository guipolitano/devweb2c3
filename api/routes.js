const { Router } = require("express");
const PersonController = require("./controllers/PersonController");

const personRoutes = Router();
const personController = new PersonController();

personRoutes.get("/", personController.list);
personRoutes.post("/", personController.create);
personRoutes.put("/:id", personController.update);
personRoutes.delete("/:id", personController.delete);

module.exports = personRoutes;
