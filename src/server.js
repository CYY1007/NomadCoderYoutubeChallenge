import express  from "express";

const app = express();
const PORT = 3000;

app.get("/", (req,res) => res.send("<h1>This is home!</h1>"));

app.get("/login", (req,res) => res.send("<h1>This is login!</h1>"));

app.get("/about", (req,res) => res.send("<h1>This is about!</h1>"))

app.get("/contact", (req,res) => res.send("<h1>This is contact!</h1>"));




app.listen(PORT, () =>{
    console.log(`Server listnening on port http://localhost:${PORT} 🚀`);
});