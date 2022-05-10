
export const userHome = (req,res) => 
res.render("userView/userhome",{pageTitle:"see users",pageName:"see users"})

export const userPage = (req,res) => 
res.render("userView/user",{pageTitle:`user ${req.params.id}`,pageName: `user ${req.params.id}'s`,userID:`${req.params.id}`})

export const userEdit = (req,res) => 
res.render("userView/edituser",{pageTitle:"edit user",pageName:"edit user"})

export const joinUser = (req,res) => 
res.render("globalView/join",{pageTitle:"join",pageName:"join"})

export const loginUser = (req,res) => 
res.render("globalView/login",{pageTitle:"login",pageName:"login"})
