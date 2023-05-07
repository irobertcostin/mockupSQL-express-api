import cors from "cors";
import express, { json, request, response } from "express";
import db from "./config/db.js";
import { Sequelize } from "sequelize";
import masina from "./models/masina.js";


const app = express();

app.use(cors());

app.use(express.json());

app.get('/masini', async (req, res) => {
    // alte metode pe sequelize 
    // de populat baza de date 
    //https://sequelize.org/api/v6/identifiers
    // create a react-app
    let masini = await db.models.masina.findAll();
    res.status(200).json(masini);
})


app.post('/add', async (req, res) => {




    let newCar = {
        maker: req.body.maker,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        mileage: req.body.mileage
    }


    await db.models.masina.create(newCar);

    // console.log(newCar);
    // // await newCar.save();


    // res.status(204).json(newCar)
    res.status(204).json('Successfully added');

})


app.delete(`/delete/id=:id`, async (req, res) => {


    let id = req.params.id;
    console.log(id);
    const car = await db.models.masina.findByPk(id);

    if (car != null) {
        console.log(car);
        await car.destroy();

        res.status(202).json('Successfully destroyed');
    } else {
        res.status(404).json(`not object with id ${id} found`)
    }




})



app.put(`/edit/id=:id`, async (req, res) => {


    let { id } = req.params
    console.log(id);

    const car = await db.models.masina.findByPk(id);


    let obj = req.body;
    console.log(obj);

    await car.set(obj);
    await car.save();

    res.status(202).json('Successfully edited');

})



db.sequelize.sync().then((result) => {


    app.listen(3456, () => {
        console.log("listen");
    })

});