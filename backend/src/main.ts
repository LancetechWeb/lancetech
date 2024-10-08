import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/config';
import cors from 'cors';
import { authRouter } from './authentication/routes/auth.routes';
import session from 'express-session';
import { currentUser } from './authentication';
import { NotFoundError, errorHandler } from './utils';



const app = express();
dotenv.config();
connectDB();

// middleware for CORS
app.use(
  cors({
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials:true
  })
);

// app.use((req, res, next) => {
//   res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
//   res.setHeader('Pragma', 'no-cache');
//   res.setHeader('Expires', '0');
//   next();
// });

// app.set('trust proxy', true);

// express parser middlewares. Replaces JSON parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// expresssession cookies middlewares
app.use(
  session({
    name:"LANCETECH_SESION",
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie:{
      sameSite:"strict",
      secure:false, // set to true if you're using HTTPS or in production 
      maxAge: 1000 * 60 * 60 * 2, // 2 hours
      signed:true
    },
  })
);

// check user middleware
app.use(currentUser)

// routes
app.use('/authenticate', authRouter);



app.all('*', (req, res, next) => {
  next(new NotFoundError())
});



/**
 * middleware for handling errors
 * @return error and status code
 */
app.use(errorHandler);

app.listen(9000, () => {
  console.log('...server listening on port 9000');
});
