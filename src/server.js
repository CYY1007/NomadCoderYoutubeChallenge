import express  from "express";
import global from "./routers/globalRouter";
import users from "./routers/userRouter";
import story from "./routers/storyRouter";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", process.cwd() + '/src/views');

app.use('/users',users);
app.use('/stories',story);
app.use('/',global);

app.listen(PORT, () =>{
    console.log(`Server listnening on port http://localhost:${PORT} 🚀`);
});