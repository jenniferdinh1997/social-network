const express = require('express'); 

const app = express(); //initializes our app variable with express

app.get('/', (req,res) => res.send('API Running'));

const PORT = process.env.PORT || 5000; //looks for environment variable called port to use and gets this port number when we deploy
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //listen on a port