import express, {NextFunction, Request, Response, Router} from "express";
import * as UsersController from "../controllers/UsersController"
import {userMiddleware} from "../middleware/UserValidatorMW";
import {authMiddleware} from "../middleware/AuthValidatorMW";
import {authPermission} from "../middleware/AuthPermissionMW";
export const router = Router();

router.param("id", (req:Request, res:Response, nxt:NextFunction, val):void=>{
    if(!Number(val)) {
        res.status(400).send("Invalid id");
        return;
    }
    nxt();
})

//Get all users
router.get("/",authPermission , UsersController.getAllUsers);
//GET user by Id
router.get("/:id",authPermission , UsersController.getUserById);
//add new user
router.post("/",userMiddleware, UsersController.addNewUser);
// login
router.post("/login", authMiddleware, UsersController.authUser);
//Update Password
router.put("/", authMiddleware, UsersController.updateUser);
//Delete User
router.delete("/:id", authPermission, UsersController.deleteUser);