###### General outline of the steps for deploying a backend API written in TypeScript and Express to AWS Elastic Beanstalk and integrating it with CircleCI:

#### 1. Set up an Elastic Beanstalk environment:
	- Create an Elastic Beanstalk application and environment in the AWS Management Console.
	- Make sure you have the AWS Elastic Beanstalk Command Line Interface (EB CLI) installed and configured on your development machine.
	- Create a .elasticbeanstalk directory in the root of your application and run eb init to configure the EB CLI for your application and environment.
#### 2. Set up a PostgreSQL RDS instance for the backend:
	- Create a PostgreSQL RDS instance on AWS and take note of the hostname, port, username, and password.
	- Update your application's configuration to use the RDS instance.
#### 3. Configure CircleCI:
	- Create a .circleci directory in the root of your application and add a config.yml file.
	- Define your jobs, workflows, and environment variables in the config.yml file.
	- Add environment variable in CircleCI (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_DEFAULT_REGION)
#### 4. Create a deployment script:
	- Create a deploy.sh script in the root of your application that will be used to deploy your application to Elastic Beanstalk.
	- The script should include commands to build the application, archive the built files, and deploy the archive to Elastic Beanstalk.
	- The deploy.sh script should be added to your CircleCI config file
#### 5. Modify your package.json
	- Add "start": "node ./build/app.js"
	- Add "build": "npx tsc"
	- Add "predeploy": "npm run build"
	- Add "deploy": "eb deploy"
	- Add npm script to run test
#### 6. Push your code to GitHub:
	- 	Commit your changes to a Git repository and push it to GitHub.
	- 	Make sure your code is being tracked by CircleCI by visiting the CircleCI website and looking for your repository.
#### 7. Deploy your application:
	- Make a change to your code and push it to GitHub.
	- CircleCI will automatically build and test your application.
	- If the build and tests pass, CircleCI will automatically deploy the application to Elastic Beanstalk.
#### 8. Monitor your application:
	- Use the AWS Management Console or the EB CLI to monitor the health and status of your Elastic Beanstalk environment and application.