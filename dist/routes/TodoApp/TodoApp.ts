import express from 'express';
const List = require('../../models/User')
const router : express.Router = express.Router();
router.get('/',(req:express.Request, res:express.Response)=>{
    res.send({
        message:"We are in"
    })

})





 

// add todo
router.post('/add', async (req:express.Request, res:express.Response) => {
    const addData = await new List(req.body);
    addData.save()
        .then(() => {
            res.send({
            message: 'Todo succesfully added'
            })
        })
       .catch((err:String)=>{
        console.log(err)
        })
})


router.get('/todos/getall', async (req:express.Request,res:express.Response) => {
    const userData = await List.find();
    res.send(userData)
})


//find one
router.get('/todos/getone', async (req:express.Request,res:express.Response) => {
    const userDataOne = await List.findOne();
    res.send(userDataOne)
})

 
// edit todo

router.put('/todos/update', async (req:express.Request,res:express.Response) => {
    try{
        await List.findOneAndUpdate({"_id":req.body._id},{tittle:req.body.tittle, descraption:req.body.descraption, addtype:req.body.addtype });
        res.send({
            message: 'todo update sucessfully',      
        })
     }
    catch(e){
        res.send({
            message: e.message,      
        })
    }
})


// Delete Todo
router.delete('/todos/delete', async (req:express.Request,res:express.Response) => {
    const id = req.body._id;
    await List.findOneAndDelete({ _id: id })
    res.send({
        message: 'todo delete Succesfully',
    })

})


module.exports = router