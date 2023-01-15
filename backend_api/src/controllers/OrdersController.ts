import {Order} from "../models/OrdersModel";
import {Request, Response} from "express";
import {QueryResult} from "pg";

export const getActiveOrders = async (req:Request, res:Response):Promise<Response> =>{
   try{
        const activeOrders = await Order.getActive(req.body.id) as QueryResult;
        if(!activeOrders.rowCount) return res.send("No active orders found!");
        return res.send(activeOrders.rows);
    }
    catch (err) {
        return res.status(400).send("Invalid token..!");
    }
}
export const getCompleteOrders = async (req:Request, res:Response):Promise<Response> => {
    try {
        const completeOrders = await Order.getComplete(req.body.id) as QueryResult;
        if (!completeOrders.rowCount) return res.send("No complete orders found!");
        return res.send(completeOrders.rows);
    } catch (err) {
        return res.status(400).send("Invalid token..!");
    }
}