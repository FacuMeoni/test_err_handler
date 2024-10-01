import { config } from "dotenv";
config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routes/user_routes.js'
import './database/user_model.js'; //models dont delete;
import errorHandler  from './middlewares/error_handler.js';
import { sequelize } from './database/database.js';



app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.use('/user', userRouter)
app.use('/', (req, res) => {
    res.send('Hello world')
})


app.use(errorHandler);


const port = process.env.PORT || 8000;

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');

        app.listen(port);
        console.log(`server listening on: http://localhost:${port}`);

        await sequelize.sync({ force:false })
        console.log('re-sync done!');

    } catch (err) {
        console.error(err);
    }
}

main();