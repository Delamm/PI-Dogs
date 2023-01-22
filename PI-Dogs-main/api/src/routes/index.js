const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require("./Dogs.js");
const temper = require("./Tempers.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogs);
router.use("/temperaments", temper);

module.exports = router;
