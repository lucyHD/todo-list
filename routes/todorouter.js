const { Router } = require('express'); //like in react, need to get this bit from express
const router = Router();
const Todo = require('../models/todo'); 
const todo = require('../models/todo');



router.get('/', async (req, res)=>{
    let list = await Todo.find({});
    
    let allList = list.map((list)=>list.toObject()); 
   

    res.render('index', { allList })
})


router.post('/', async (req, res)=>{
    let { item, dueby, category, del } = req.body;

    const todos = new Todo({
        item, 
        dueby,
        category
    })
    await todos.save(); 


    // del = req.body.del;
    // del = todos._id
    // console.log(itemID)
    // if(itemID === todos._id){
    //     console.log(itemID)
    //     Todo.findByIdAndDelete(itemID); 
    // }
   
    res.render('index')

    
})

router.delete("/index/:id", async (req, res, next)=>{
    todo.findByIdAndDelete(req.params.id)
})
module.exports = router; 