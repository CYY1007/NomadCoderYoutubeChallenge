import express  from "express";

const app = express();
const PORT = 3000;

const urlLogger = (req,res,next) => {
    console.log("req:", req.originalUrl); 
    next();}

const timeLogger = (req,res,next) =>{
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1
    const day = date.getDay() + 1
    console.log(`Time: ${year}.${month}.${day}`);
    next();
}

const securityLogger = (req,res,next) =>{
    const result =  req.protocol === "https" ? "Secure" : "Insecure";
    console.log(result);
    next();
}

const protectorMiddleware = (req,res,next) =>{
    console.log("you can't move to this url");
    res.redirect(301,'/');
}

app.use(urlLogger,timeLogger,securityLogger);

app.get(`/protected`, protectorMiddleware)
app.get('/', (req,res) => res.end())



app.listen(PORT, () =>{
    console.log(`Server listnening on port http://localhost:${PORT} 🚀`);
});