### Infrastructure Description:
- The infrastructure for this FullStack_StoreFront application includes:
	- 	A front-end client built with React
	- 	A back-end server built with Node.js and Express
	- 	A PostgreSQL database to handle CRUD operations for products and user 		authentication.
	- 	The application is deployed AWS EC Beanstalk where it runs on a web server.
	- 	The application makes use of AWS S3 for frontend hosting.


### App Dependencies:
- The application depends on several external libraries and technologies, including:
	- **React
	- Node.js
	- Express
	- PostgreSQL**
	- **npm** or **yarn**
- These dependencies are listed in the package.json file and are installed during the application setup process.

### Pipeline Process:
- The pipeline process for this FullStack_StoreFront application includes the following steps:
	- Code changes are made to the application and pushed to **Git**.
	- A continuous integration (CI) tool **CircleCI** is used to automatically build and test the application on each code push.
	- If the build and tests are successful, the application is deployed to **AWS**
	- The deployed application is monitored and maintained in production.
	- The pipeline process can also include additional steps like security testing, performance testing, and automatic rollback in case of any issues.
- This pipeline process helps in ensuring that the changes are tested and deployed smoothly and also it helps in maintaining the stability and security of the application in production.
### Diagram that shows the infrastructure of the application i.e DB ---> API --> Frontend


    +------------+      +-------------+      +-------------+
    |
    |  Frontend  | <---  |   API       | <---  |  Database   |
    |
    +------------+      +-------------+      +-------------+
####  a diagram showing the overview of the pipeline. The basic items that you can include are pushing code to repo --> Github ---> circleCI --> AWS.
                                 +------------+
                                 |            |
                                 |  Developer |
                                 |            |
                                 +------+-----+
                                        |
                                        | Push code to repository
                                        |
                                 +------+-----+
                                 |            |
                                 |   GitHub   |
                                 |            |
                                 +------+-----+
                                        |
                                        | Triggers CircleCI
                                        |
                                 +------+-----+
                                 |            |
                                 |  CircleCI  |
                                 |            |
                                 +------+-----+
                                        |
                                        | Build and test code
                                        |
                                 +------+-----+
                                 |            |
                                 |    AWS     |
                                 |            |
                                 +------+-----+
                                        |
                                        | Deploy code
                                        |
