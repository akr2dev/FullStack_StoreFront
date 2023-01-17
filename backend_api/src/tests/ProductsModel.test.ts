import {Product} from "../models/ProductsModel";

describe("Product Model", ()=>{
   it("index method", ()=>{
      expect(Product.index).toBeDefined();
   });
   it(" show method", ()=>{
      expect(Product.show).toBeDefined();
   });

   it(" delete method", ()=>{
      expect(Product.delete).toBeDefined();
   });
   it(" update method", ()=>{
      expect(Product.update).toBeDefined();
   });
   it("create method", ()=>{
      const newProduct = new Product("testName", 500, "testCategory");
      expect(newProduct.create).toBeDefined();
   });
   it("create method should add a product ", async ()=>{
      const newProduct:Product = new Product("testPhone", 500.85, "Phones");
      const result = await newProduct.create();
      expect(result.rows).toEqual([{id:result.rows[0].id, name: "testPhone", price:'500.85', category: "Phones"}]);
      await Product.delete(result.rows[0].id);
   });
   it("index method should return products", async()=>{
      const result = await Product.index();
      // @ts-ignore
      expect(result[0]).toEqual({id:1, name:'Lenovo G580', price:'1200.00', category:'Laptops'});
   });
});