const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
const adminRoutes = require("./admin");
const { required } = require("joi");

console.log(1);
/**
 * @swagger
 * components:
 *  schemas:
 * 	 Matras:
 * 		type: object
 * 		required:
 * 			- title
 * 		properties:
 * 			id:
 * 				type: string
 * 				description: The author generated id of matras
 * 			title:
 * 				type:string
 * 				description: The matras title
 * 		example:
 * 			id: d5fE_asz
 * 			title: New Matras
 */
console.log(2);
/**
 * @openapi
 * /routes:
 * 	get:
 * 		summary: Returns the list  of all addresses.
 */

console.log(3);


router.use("/api", apiRoutes);
router.use("/admin", adminRoutes);


router.use("/api", (req, res) =>
  res.status(404).json({ status: 404, message: "No API route found" })
);

router.get("/", (req, res) => res.send("It works"));

module.exports = router;
