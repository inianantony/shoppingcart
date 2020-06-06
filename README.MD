[![Build Status](https://travis-ci.org/brenohq/nodejs-shopping-cart.svg?branch=master)](https://travis-ci.org/brenohq/nodejs-shopping-cart)

# GameStore - NodeJS/Express

# Live Demo on Heroku:
[nodejs-shopping-cart.herokuapp.com](https://nodejs-shopping-cart.herokuapp.com/)

### Run Locally on Your Machine
You need Node, NPM and MongoDB properly installed.

Clone this repository
``` shell
    git clone https://github.com/inianantony/shoppingcart.git
```
Setup the environment variables replacing <MONGODB-PORT> with your mongodb port, usually is 27017.
``` shell
    export MONGO_DB_URI=mongodb://localhost:<MONGODB-PORT>/shopping
```
Setup the environment variable for statup port to be 8080, if 3000 is being used
``` shell
    export PORT=8080
```
Install dependencies
``` shell
    npm install
```

With your mongod service running, this will populate shopping database
``` shell
    node seed/product-seeder.js 
```
This will start dev server at http://localhost:3000 with Nodemon.
or at port 8080 http://localhost:3000, if env variable is set to 8080

``` shell
    npm run dev
```

### Technologies
###### Back-end
NodeJS, Express, MongoDB, Mongoose. 
###### Fron-end
Handlebars and Bootstrap.

##### Payment
NUMBER | BRAND | CVC | DATE 
--- | --- | --- | --- 
4242424242424242 | Visa | Any 3 digits | Any future date 
5555555555554444 | Mastercard | Any 3 digits | Any future date 
