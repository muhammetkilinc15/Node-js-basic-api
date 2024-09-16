const router = require("express").Router();
const { getAll, getById, create, update, delete: deleteItem } = require('../controllers/userController');

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteItem);

module.exports = router;