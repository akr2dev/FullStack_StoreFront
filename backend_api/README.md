### Features

- RESTful API for online store
- Users login API
- Products API
- Orders API

##### Packages used
- express
- ajv
- bcrypt
- config
- db-migrate
- db-migrate-pg
- jsonwebtoken
- pg

# Getting Started
 to configure database correctly kindly do the following:
1. In config/development.json it stores the development variables for database:
```json
{
  "Database": {
    "user": "store_admin",
    "database": "store_front",
    "password": "admin"
  },
  "jwtsec": "dev"
}
```
2. In config/testing.json it stores the testing variables for database:

```json
{
  "Database": {
    "user": "store_admin",
    "database": "store_front_test",
    "password": "admin"
  },
  "jwtsec": "test"
}
```
By default, we are running on development env,
to change into testing env you need to set `NODE_ENV=testing`
before running any of the following commands
It depends on your Operating System how to set custom environment in the shell

1. installing modules `npm install`
2. running db migrate on development db`npx db-migrate up` OR  testing db`npx db-migrate up -e test` 
3. running typescript `npm run build`
4. testing by jasmine `npm run test`
5. starting  the server `npm run start`

## Routes
The following table shows overview of the Rest APIs that will be exported:
### /products
|  Methods |  URls |  Actions | Auth |
| ------------ | ------------ | ------------ | ------------ |
|  GET | /  | getting all products  | Not required |
|  GET | / :id | getting  product by id  | Not required |
|  GET | / cat/:category | getting all products by category | Not required |
|  GET | / top/five | getting top five products  | Not required |
| POST |  /  | add new product  | admin required |
|  PUT | /:id  | update price by id  | admin required |
|  DELETE | /:id  | delete price by id  | admin required |

#### How to test on postman
- for POST, PUT  you have to send JSON fomrat as following:
1. Post
```json
        {
        "productName":,
        "price":,
        "category":
		}
```
2.Put
```json
{
"price":,
}
```
### /users
Kindly refer to /utils and check relevant file for more details.

|  Methods |  URls |  Actions | Auth |
| ------------ | ------------ | ------------ | ------------ |
|  GET | /  | getting all users  | admin  required |
|  GET | / :id | getting  user by id  | admin  required |
|  POST | /  | create new user | Not required |
| POST |  /login  | sign in with created users login details  | not required |
|  PUT | /  | update password by emial  | not required |
|  DELETE | /:id  | delete price by id  | admin required |

#### How to test on postman
- for POST, PUT  you have to send JSON fomrat as following:
1. POST
```json
{
"first_name":,
"last_name":,
"email":,
"password":
}
```
2. POST /login
```json
{
"email": ,
"password": 
}
```
3. PUT
```json
{
"email": ,
"password": 
}
```
### /orders

|  Method | URL  | Action  | Auth  |
| ------------ | ------------ | ------------ | ------------ |
| GET  | /active  | get current active orders  | must be logged in  |
| GET  | /complete  | get current completed orders  | must be logged in  |

### How to authinteicate / authorize on Postman
1. login via user logging in API from above table
2. If you logged in successfully you will get header 'x-auth-token'
3. copy it and add it in your new requests
##### password
1. admin login details [email: akr2dev@admin.com ,  password: admin123]
2. user login details [email: hancock@user.com, password: user123]

### Credits
- MaharaTech