import Express from 'express';
import cors from 'cors';
// import { routes } from './routes/index'
const app = Express();

//middlewares
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({extended: false}));


//routes
app.use(require('./routes/index'))

let whitelist = ['http://localhost:4200'];
let corsOptions = {
    origin: function(origin,callback) {
        if(whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server listen port ${PORT}`);
})