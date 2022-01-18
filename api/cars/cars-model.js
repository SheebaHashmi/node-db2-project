const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db().where('id',id)
}

const create = async (changes) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(changes)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create
}