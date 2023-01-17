import {User} from "../models/UsersModel";
import {Request, Response} from "express";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import config from "config";

export const getAllUsers = async (req:Request, res:Response):Promise<Response> =>{
    try {
    const result = await User.index();
    return res.send(result);
    }  catch (err) {
        console.log (err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const getUserById = async (req:Request, res:Response):Promise<Response> =>{
    try {
    const id:number = Number(req.params.id);
    const result = await User.show(id);
    if(!result.rowCount) return res.status(404).send("User with the given ID was not found!");
    return res.send(result.rows);
    }  catch (err) {
        console.log (err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const addNewUser = async (req:Request, res:Response):Promise<Response> =>{
try {
    const {first_name, last_name, email, password} = req.body;
    //check user exists
    const userFound = await User.getUserByEmail(email);
    if(userFound.rowCount) return res.status(400).send("User already registered!!");
    //create new user
    const salt =    await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user: User = new User(first_name, last_name, email, hashedPassword);
    await user.create();
    const newUser = await User.getUserByEmail(email)
    if (!config.get("jwtsec")) return res.status(500).send("Request can't be fullfilled.. Token is not defined")
    const token = jwt.sign({userId: newUser.rows[0].id, isAdmin: newUser.rows[0].admin}, config.get("jwtsec"));
    res.header("x-auth-token", token);
    return res.send("User added successfully");
}  catch (err) {
    console.log (err);
    return res.status(400).send("Bad Requests.. Contact support ")
}
}
export const updateUser = async (req:Request, res:Response):Promise<Response> =>{
    try {
    const email = req.body.email;
    const userFound = await User.getUserByEmail(email);
    if(!userFound.rowCount) return res.status(400).send("User with this id not found!");
    const salt =    await bcrypt.genSalt(10);
     const newPassword = await bcrypt.hash(req.body.password, salt);
    await User.update(newPassword, email);
    return res.send("Updated successfully!");
    }  catch (err) {
        console.log (err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const deleteUser = async (req:Request, res:Response):Promise<Response> => {
    try {
    const id:number = Number(req.params.id);
    let userFound = await User.show(id);
    if(!userFound.rowCount) return res.status(404).send("User with this Id not found!");
    await User.delete(id);
    return res.send("Deleted successfully!");
    }  catch (err) {
        console.log (err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const authUser = async (req:Request, res:Response): Promise<Response>=>{
    try {
        const {email, password} = req.body;
        //check email
        const userFound = await User.getUserByEmail(email);
        if (!userFound.rowCount) return res.status(400).send("Invalid email or password..");

        //check password
        const validPassword = await bcrypt.compare(password, userFound.rows[0].password);
        if (!validPassword) return res.status(400).send("Invalid email or password..");

        //send res
        if (!config.get("jwtsec")) return res.status(500).send("Request can't be fullfilled.. Token is not defined")
        const token = jwt.sign(
            {userId: userFound.rows[0].id, isAdmin:userFound.rows[0].admin}, config.get("jwtsec"));
        res.header("x-auth-token", token);
        return res.status(200).send("logged in successfully");
    } catch (e) {
        console.log(e);
        return  res.status(500).send("Error occurred, try again or contact support");
    }
}