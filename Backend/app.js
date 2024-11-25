const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');
connectDb();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes');

app.set("view engine", 'ejs');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser())

app.use('/user',userRoutes);
let port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log('server started listening at : '+port);
})