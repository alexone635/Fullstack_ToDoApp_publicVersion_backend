//define how our data is going to be saved in database
const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {

    const { text } = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

//To update one of the To do items
module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body //based on our id, we are going to update our things in database
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully...."))
    //then catch if there is any error
    .catch((err) => console.log(err))
}

//this one is for delete to do item
module.exports.deleteToDo = async (req, res) => {
    const {_id } = req.body //based on our id, we are going to update our things in database
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    //then catch if there is any error
    .catch((err) => console.log(err))
}
