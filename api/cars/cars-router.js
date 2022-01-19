// DO YOUR MAGIC
const Cars = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
  } = require('./cars-middleware')
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

router.get('/:id',checkCarId,(req,res)=> {
        res.json(req.car) 
})

router.post('/',checkCarPayload,checkVinNumberValid,checkVinNumberUnique,async(req,res,next)=> {
    try{
        const newCar = await Cars.create(req.body)
        res.json(newCar)
    }
    catch(err){
        next(err)
    }
})

router.use((err,req,res,next)=> { // eslint-disable-line
    res.status(err.status || 500).json({
        message:err.message
    })
})

module.exports = router