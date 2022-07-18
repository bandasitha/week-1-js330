# Movies API
This project provides endpoints to the <i>mflix</i> movie database. The movie database is a free sample collection of data provided by the [MongoDB](https://www.mongodb.com/) console, in MongoDB's document database format. 

# Description
The project contains 3 endpoints ```/```, ```id``` and ```title```, and allows the use to ```GET```, ```POST```, and ```PUT``` data from/to the database. All packages were installed using NPM, and utilizes the Express framework to serve the application. The ```DELETE``` operation has not been implemented yet.

# Getting Started

### Clone the repository
```git clone https://github.com/bandasitha/week-1-js330.git```
### Install dependencies
```npm install```
### Configure environment variables
* Replace credentials with your own 
* Update database name to your own
### Run the application
```npm run start```
### Begin HTTP methods!
```curl http://localhost:5000/movies```

# Future requests
* Add ```DELETE``` methods
* Hide credentials in .env file 