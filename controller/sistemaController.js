const models = require("../models/data.js")
const controller = {};

  controller.GetProductos = (req, res) => {

    models.ProductoListar((err, rows)=>{
      if (err) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.json({
              ok: true,
              productos: rows
            });

    });

  };


  module.exports = controller;