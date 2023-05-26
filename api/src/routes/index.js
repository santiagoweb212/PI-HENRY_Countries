const { Router } = require("express");
const countri = require("./countries");
const activity = require("./activities");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getCountries = require("../services/getCountries");

  /* let n =  getCountries(); */



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countri);
router.use("/activities", activity);
module.exports = router;
