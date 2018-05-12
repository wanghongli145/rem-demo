const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));
 
const PORT = '3000';
let server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
