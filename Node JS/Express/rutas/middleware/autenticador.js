const express = require('express');

const router = express.Router();

router.use("/privada", (req, res, next) => {
	console.log("No se ha iniciado sesión");
	res.redirect("/inicio");
});

module.exports = router;