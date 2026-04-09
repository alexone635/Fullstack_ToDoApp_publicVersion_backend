const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo) //save to do item route
router.post('/update', updateToDo) //update to do item route
router.post('/delete', deleteToDo) //delete to do item route

module.exports = router;