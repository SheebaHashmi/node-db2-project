const Cars = require('./cars-model')
const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const exists = await Cars.getById(req.params.id)
  
    if(!exists){
      next({status:404,message: `car with id ${req.params.id} is not found` })
    }
    else{
      req.car = exists
      next()
    }

  }
  catch(err){
    next({message:err.message})
  }
   
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}