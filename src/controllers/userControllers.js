
export const userHome = (req,res) => res.send(`<h1>User Home</h1>`);
export const userPage = (req,res) => res.send(`<h1>This is ${req.params.id}'s Page</h1>`);
export const userEdit = (req,res) => res.send(`<h1>User Edit Page</h1>`);
export const joinUser = (req,res) => res.send(`<h1>Join!</h1>`);
export const loginUser = (req,res) => res.send(`<h1>Login Page!</h1>`);
