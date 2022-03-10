class HomeController{

    async index(req, res){
        res.send("APP EXPRESS! - API User");
    }

}

module.exports = new HomeController();