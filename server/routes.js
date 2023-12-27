const controllers = require("./controllers");
const { Router } = require("express");
const router = Router();

//public routes
router.get("/", controllers.getAllTodo);
router.get("/:id", controllers.getTodoById);
router.post("/", controllers.addTodo);
router.put("/:id", controllers.updateTodo);
router.delete("/:id", controllers.deleteTodo);

module.exports = router;
