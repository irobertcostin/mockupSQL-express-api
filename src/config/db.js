
import { Sequelize } from "sequelize";

import masina from "../models/masina.js"



const connectDb = () => {
    try {
        let sequelize = new Sequelize(
            "automarket",
            "root",
            "Borisescul23",
            {
                host: "localhost",
                dialect: "mysql"
            }

        )

        let db = {

            models: {}
        }

        // clasa seueqlizw
        db.Sequelize = Sequelize;
        // obiectul sequelize
        db.sequelize = sequelize;
        //
        db.models.masina = masina(sequelize);


        return db;


    } catch (error) {
        console.log(error);
    }
}


let db = connectDb();
export default db;