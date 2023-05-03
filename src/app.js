import cors from "cors";
import express,{ json, request, response } from "express";
import db from "./config/db.js";



const app = express();


app.use(express.json());

app.get('/masini', async (req,res)=>{
// alte metode pe sequelize 
// de populat baza de date 
//https://sequelize.org/api/v6/identifiers
// create a react-app



    let  masini= await db.models.masina.findAll();



    res.status(200).json(masini);   
})



db.sequelize.sync().then((result) => {
    

    app.listen(3456,()=>{
        console.log("endpoint");
    })
    
});