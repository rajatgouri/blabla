const express     = require("express");
const mongoose    = require('mongoose');
const config      = require('./config/config');
const cors        = require('cors');
const route       = require('./routes/router.js');
const createAdmin = require('./migrations/migrate');
const path        = require('path');

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/images', express.static(path.join('assets/images')));
app.use('/', route.init());

mongoose
    .connect(
        process.env.mongoURL, { 
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true  
        }
    ).then((connect) => {
        console.log('database connected')
        app.listen(8090,()=>{

            console.log("Server is running !");
            // run this to create a admin only once on the first run
            // createAdmin.createAdmin();
        })
    }).catch((err)=> {
        console.log(err)
    });

  