import "reflect-metadata";
import { DataSource } from "typeorm";
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
    // https://stackoverflow.com/questions/76899023/rds-while-connection-error-no-pg-hba-conf-entry-for-host
    "ssl": true,
    "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
});