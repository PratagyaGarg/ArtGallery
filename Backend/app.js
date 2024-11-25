const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./config/db');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser  = require('body-parser')

app.set("view engine", 'ejs');
connectDb();

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.use('/user',userRoutes);

app.listen(2707, ()=>{
    console.log('server started listening at port 2707');
})