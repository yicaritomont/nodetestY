const express = require("express");
const router = express.Router();
const db = require("../queries");

router.get("/", (request, response) => {
  response.json({ info: "node js, Express y postgres API :P " });
});

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Retrive a list to user saved.
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get("/users", db.getUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Retrive a list to user :id .
 *     parameters:
 *       id:
 *         in: path
 *         name: id
 *         description: Unique number of identification in the billing system
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A info user by id.
 */
router.get("/users/:id", db.getUserById);
router.post("/users", db.createUser);
router.put("/users/:id", db.updateUser);
router.delete("/users/:id", db.deleteUser);
module.exports = router;
