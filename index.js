//MODULES
const express = require('express');
//
const axios = require('axios');

//CREATE APP
const app = express();

//CREATE PORT
const PORT = process.env.PORT || 3000;

//CREATE RUBEN ROUTE
app.get('/', (req, res) => {
    
    axios.get('https://api.github.com/users/anonyymous1')
     .then(response => {
        //  console.log(response.data);
         const rubenObject = {
             login: response.data.login,
             url: response.data.html_url,
             name: response.data.name
            };
            console.log(rubenObject);
            res.send(rubenObject);
    });
});

//CREATE ROME ROUTE
app.get('/rome', (req, res) => {
    
    axios.get('https://api.github.com/users/romebell')
     .then(response => {
        //  console.log(response.data);
         const romeObject = {
             login: response.data.login,
             url: response.data.html_url,
             name: response.data.name
            };
            console.log(romeObject);
            res.send(romeObject);
    });
});

//CREATE NICOLE ROUTE
app.get('/nicole', (req, res) => {
    
    axios.get('https://api.github.com/users/nikkihmltn')
     .then(response => {
        //  console.log(response.data);
         const nikkiObject = {
             login: response.data.login,
             url: response.data.html_url,
             name: response.data.name
            };
            console.log(nikkiObject);
            res.send(nikkiObject);
    });
});

//CREATE JAXON ROUTE
app.get('/jaxon', (req, res) => {
    
    axios.get('https://api.github.com/users/JaxonNarramore')
     .then(response => {
        //  console.log(response.data);
         const jaxonObject = {
             login: response.data.login,
             url: response.data.html_url,
             name: response.data.name
            };
            console.log(jaxonObject);
            res.send(jaxonObject);
    });
});

//CREATE ASHTON ROUTE
app.get('/ashton', (req, res) => {
    
    axios.get('https://api.github.com/users/Swolepenguin')
     .then(response => {
        //  console.log(response.data);
         const ashtonObject = {
             login: response.data.login,
             url: response.data.html_url,
             name: response.data.name
            };
            console.log(ashtonObject);
            res.send(ashtonObject);
    });
});

//CREATE CAROLINA ROUTE
app.get('/carolina', (req, res) => {
    
    axios.get('https://api.github.com/users/canourrea23')
     .then(response => {
        //  console.log(response.data);
         const carolinaObject = {
             login: response.data.login,
             url: response.data.html_url,
             name: response.data.name
            };
            console.log(carolinaObject);
            res.send(carolinaObject);
    });
});

//CREATE ARIEL ROUTE
app.get('/ariel', (req, res) => {
    
    axios.get('https://api.github.com/users/ajstrizzy')
     .then(response => {
        //  console.log(response.data);
         const arielObject = {
             login: response.data.login,
             url: response.data.html_url,
             name: response.data.name
            };
            console.log(arielObject);
            res.send(arielObject);
    });
});

//LISTEN ON PORT
app.listen(PORT,() => {
    console.log(`You are vibing to the sounds on PORT ${PORT} 🎧`);
})