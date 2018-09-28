const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');
const bodyParser = require('body-parser');


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
    6- fix start your command
*/

const PORT = process.env.PORT || 9010; // required



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
} // required


app.get('/', (req, res) => {

    res.json({
        message: 'Server is up and running!'
    });
});


app.post('/add', (req, res) => {
    const data = req.body;



});


io.on('connection', function (socket) {
    console.log('a user connected');


    socket.on('chat message', function (msg) {
        console.log('Value: ', msg);
        io.emit('chat message', msg);
    });


    socket.on('disconnect', function () {
        console.log('user disconnected');
    });


});

http.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});