const express = require('express');
const debug = require('debug')('app')
//set DEBUG= *& node app.js
const morgan = require('morgan')
const chalk = require('chalk');

const app = express();
const port = 3000;

app.use(morgan('common'))


app.get("/", (req,res)=> {
    
    res.send('Hello borntoDev')
})

app.listen(port, ()=> {
    console.log(`server start on port: ${chalk.green(port)}`)
    debug("server start"+chalk.red(port))
})