# FortuneAPI

## File Purpose
A RESTful API built with Node.js and Express that allows clients to create, retrieve, update and delete fortune records stored in MongoDB. This project was built to practice backend API development, database integration with Mongoose and request validation using Express Validator. 

## Technologies Used
* Node.js
* Express
* MongoDB
* Mongoose
* Express Validator

## How to run
1. Download (or clone) the project.
2. Install Node.js (v22.12.0 or compatible).
3. Install project dependencies:

    npm install

4. Create a MongoDB database and obtain the connection string.
5. Create a `.env` file using `.env.example` as a template.
6. Start the server: 

    node .
   
8. Test the API using Postman or another API client.

## Endpoints
GET /fortunes

GET /fortunes/id/:id

GET /fortunes/getRandomFortune

GET /fortunes/getNumFortunes

POST /fortunes

PUT /fortunes/id/:id

DELETE /fortunes/id/:id
