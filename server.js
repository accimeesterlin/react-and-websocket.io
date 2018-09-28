const express = require('express');
const app = express();
const path = require('path');

/*

    Steps to Deploy to Heroku

    1- npm run build inside the client folder
    2- process.env.PORT on the server
    3- app.use(express.static(path_to_build_folder));
    4- Don't ignore the build inside .gitignore
    5- add engines key inside the package.json 
        Example: "engines": {
                    "node": "9.2.1"
                }
    6- 
*/

const PORT = process.env.PORT || 9010; // required


app.use(express.static(path.join(__dirname, 'client/build'))); // required


app.get('/', (req, res) => {

    res.json({
        message: 'Server is up and running!'
    });
});

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});