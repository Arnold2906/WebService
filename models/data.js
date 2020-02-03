const pool = require('../config/db')
const models = {};


  models.ProductoListar = (callback) => {

    let query = 'SELECT * FROM Producto';
    
    pool.query(query, callback);
  
  };


module.exports = models;