'use strict';

const PORT = 4000;

const express = require("express");
const { range } = require('express/lib/request');
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

const fs = require('fs');

app.post("/temp", (req,res) =>{
    // declares variables

    const json = {
        curr_unit : req.body.curr_unit,
        curr_temp : req.body.curr_temp,
        new_unit : req.body.new_unit,
    };

    const value = JSON.stringify(json);

    // declares string and sends it to new page using the information pulled above
    const message = value;
    res.send(message); 
    fs.writeFile('temp.txt', message, err => {
        if (err) {console.error(err)}
    });
    return false;
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});