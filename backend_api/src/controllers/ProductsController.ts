import {Product} from "../models/ProductsModel";
import {Request, Response} from "express";
import {QueryResult} from "pg";

export const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await Product.index();
        return res.send(result);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const getProductById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        const result = await Product.show (id);
        if (!result.rowCount) return res.status(404).send("not found!");
        return res.send(result.rows[0]);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const getProductByCategory = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = await Product.getCategory(req.params.category);
        if (!result.rowCount) return res.status(404).send("not found!");
        return res.send(result.rows);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const addNewProduct = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {productName, price, category} = req.body;
        const product: Product = new Product(productName, price, category);
        const newProduct = await product.create();
        return res.send(newProduct.rows[0]);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const updateProductById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        const price: number = Number(req.body.price);
        if (typeof price !== "number") return res.status(400).send("invalid datatype");
        const productFound = await Product.show (id);
        if (!productFound.rowCount) return res.status(400).send("No Product Found");
        await Product.update(price, id);
        return res.send("Updated Successfully");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const deleteProductById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id: number = Number(req.params.id);
        let productFound = await Product.show (id)
        if (!productFound.rowCount) return res.status(404).send("Not found!");
        await Product.delete(id);
        return res.send("Row Deleted");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Bad Requests.. Contact support ")
    }
}
export const getTopFive = async (req: Request, res: Response):Promise<Response> =>{
    try {
        const topProducts = await Product.getTop() as QueryResult;
        if (!topProducts.rowCount) return res.status(400).send("No orders found");
        return res.send(topProducts.rows);
    }catch (err) {
        return res.status(500).send("Bad request... contact support");
    }
}