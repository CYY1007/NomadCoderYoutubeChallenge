export const storiesPage = (req,res) => res.send(`<h1>This is the story ${req.params.id}</h1>`);
export const storiesEdit = (req,res) => res.send(`<h1>Edit ${req.params.id}!</h1>`);
export const storiesDelete = (req,res) => res.send(`<h1>Delete ${req.params.id}!</h1>`);