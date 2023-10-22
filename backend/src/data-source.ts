import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Products } from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "compar-case-db.csycqxkhpio6.eu-central-1.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "Mikkel_compar!?",
    database: "initial_comar_db",
    synchronize: true,
    logging: false,
    entities: [Products],
    migrations: [],
    subscribers: [],
    // https://stackoverflow.com/questions/56660312/cannot-connect-an-ssl-secured-database-to-typeorm - If you connect an SSL certification to this it should run no problem. For now I just removed the rejection
    "ssl": true,
    "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
});