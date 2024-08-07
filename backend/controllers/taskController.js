const Task = require('../models/task');

// exports.createTask = async (req, res) =>{
//    try{
//        const task = await Task.create(req.body);
//        res.status(201).json(task);
//    } catch (error) {
//        res.status(500).json({error: error.message});
//    }
// };


// exports.getTasks = async (req, res) => {
//       try{
//        const tasks = await Task.findAll();
//        res.status(200).json(tasks);

//       } catch (error) {

//        res.status(500).json({error: error.message});
//       }
// };

// exports.updateTask = async (req, res) => {
//    try {
//        const task = await Task.findByPk(req.params.id);
//        if(!task){
//            return res.status(404).json({error: 'TASK NOT FOUND'});
//        }
//        await task.update(req.body);
//    } catch (error) {
//        res.status(500).json({error: error.message});
//    }
// };

// exports.deleteTask = async (req, res) => {
//    try{
//        const task = await Task.findByPk(req.params.id);
//        if(!task) {
//            return res.status(404).json({error: 'TASK NOT FOUND'})
//        }
//        await task.destroy();
//        res.status(204).end();
//    } catch (error) {
//        res.status(500).json({error: error.message});
//    }
// };