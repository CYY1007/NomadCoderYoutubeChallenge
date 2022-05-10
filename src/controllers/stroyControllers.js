export const storiesPage = (req,res) => 
res.render("storyView/seestory",{pageTitle:"see story",pageName:"see story",storyID: `${req.params.id}`})

export const storiesEdit = (req,res) => 
res.render("storyView/editstory",{pageTitle:"eidt story",pageName:"edit story",storyID:`${req.params.id}`})

export const storiesDelete = (req,res) => 
res.render("storyView/deletestory",{pageTitle:"delete story",pageName:"delete story",storyID:`${req.params.id}`})