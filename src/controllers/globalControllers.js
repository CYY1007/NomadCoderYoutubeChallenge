export const homePage = (req,res) => 
res.render("globalView/home.pug",{pageTitle: "home", pageName:"home"});

export const trendingPage = (req,res) => 
res.render("globalView/trending.pug",{pageTitle: "trending", pageName:"trending"});

export const newPage = (req,res) => 
res.render("globalView/new.pug",{pageTitle: "new", pageName: "new"});
