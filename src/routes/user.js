import express from "express";
import usersController from "../controllers/user.js";
import requestMiddleware from "../middleware/requestMiddleware.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import { check } from "express-validator";
import { jwtMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.route('/')
    .get(requestMiddleware, usersController.getUsers)
    .post([
        check("name", "Invalid name, it must have at least 4 characters").isLength({ min: 4 })
    ], validationMiddleware, usersController.addUser)
    .put([
        check("name", "Invalid name, it must have at least 4 characters").isLength({ min: 4 })
    ], validationMiddleware, jwtMiddleware, usersController.updateUser)
    .delete(jwtMiddleware, usersController.deleteUser)

router.route('/login')
    .post([
        check("name", "Invalid name, it must have at least 4 characters").isLength({ min: 4 })
    ], validationMiddleware, usersController.loginUser)

router.route('/:id')
    .get(requestMiddleware, usersController.getUser)

export default router;
