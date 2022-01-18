// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router();

router.get('/',async(req,res,next) => {
    try{
        const cars = await Cars.getAll()
        res.json(cars)
    }
    catch(err){
         next(err)
    }
})

router.get('/:id',(req,res)=> {
    
})

router.post('/',(req,res)=> {

})

module.exports = router