import {User} from "../models/UsersModel";

describe("User Model", ()=>{

    it("index method", ()=>{
        expect(User.index).toBeDefined();
    });
    it(" show method", ()=>{
        expect(User.show).toBeDefined();
    });

    it(" delete method", ()=>{
        expect(User.delete).toBeDefined();
    });
    it(" update method", ()=>{
        expect(User.update).toBeDefined();
    });
    it("create method", ()=>{
        const newUser = new User("testFirst", "testLast", "testEmail@.com", "TestPassword");
        expect(newUser.create).toBeDefined();
    });
    it("create method should add a user ", async ()=>{
        const newUser:User = new User("testFirst", "testLast", "testEmail@.com", "TestPassword");
        const result = await newUser.create();
        expect(result.rows).toEqual([{id:result.rows[0].id, first_name: "testFirst", last_name:'testLast', email: "testEmail@.com", password:"TestPassword", admin:false}]);
        await User.delete(result.rows[0].id);
    });
    it("index method should return users", async()=>{
        const result = await User.index();
        // @ts-ignore
        expect(result[0]).toEqual({first_name:"Akr2dev", last_name: "admin", email:"akr2dev@admin.com"});
    });

});