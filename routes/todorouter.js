const { Router } = require('express'); //like in react, need to get this bit from express
const router = Router();
const Todo = require('../models/todo'); 
const editDate = require('../lib/editDate');




router.get('/', async (req, res)=>{
    let list = await Todo.find({});
    let allList = list.map((list)=>list.toObject()); 
    allList = editDate(allList);
    res.render('index', { allList })
})


router.post('/', async (req, res)=>{
    let { item, dueBy, category } = req.body;

    const todos = new Todo({
        item, 
        dueBy,
        category,
        col: "#3D2645",
        
    })
    await todos.save(); 
   
    res.redirect('/') //why / and not index? //redirect freshing to reload the database information. To pull the information from the server it has to be refreshed. 
    
})


router.post('/removeItem', async (req,res)=>{
    let data = await Todo.findByIdAndDelete({_id:req.body.remove})
    //this is getting the value - the value is the value to be sent to the server. What you set as the value in your button gets passed here(req.body.remove) remove is the name you have given the button. 

    res.redirect('/')
});


router.post ('/markComplete', async (req, res)=>{
    let boxID = await Todo({_id: req.body.complete});

    if(boxID)
    Todo.findByIdAndUpdate(
        boxID, {col: "#DA4167", lineThrough:"line-through"},
        function (err, done){
            if (err){
                console.log(err);
            }else if (done) {
                res.redirect('/'); 
            }
        }
    )

  

})


module.exports = router; 




    //     let itemID = req.body.params
    //     console.log(itemID)
    // Todo.findByIdAndDelete(itemID);


    // del = req.body.del;
    // del = todos._id
    // console.log(itemID)
    // if(itemID === todos._id){
    //     console.log(itemID)
    //     Todo.findByIdAndDelete(itemID); 
    // }

    // router.delete("/index/:id", async (req, res, next)=>{
//     todo.findByIdAndDelete(req.params.id)
// })