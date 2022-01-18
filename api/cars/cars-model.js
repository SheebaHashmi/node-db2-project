const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

const getById = async (id) => {
  // DO YOUR MAGIC
  return await db('cars').where('id',id).first()
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