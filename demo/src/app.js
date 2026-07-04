import express from "express";

function createApp(){
    const app = express();

    app.use(express.static("public"));
    app.set("view engine", "ejs");

    app.get('/', (req,res)=>{
        res.render('pages/index');
    });

    return app;
}

export default createApp;