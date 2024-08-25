const express = require('express')
const app = express()
const port = 5000

//const http = require('http').Server(app)

const cors = require('cors');
app.use(cors({
  origin: ['https://food-delivery-app-frontend-chi.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));



const mongoDB = require("./db")
mongoDB.connectDb();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://food-delivery-app-frontend-chi.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on food-delivery-app-frontend-chi.vercel.app`)
})

/*const express = require('express')
const app = express()
const port = 5000

const mongoDB = require("./db")
mongoDB.connectDb();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "food-delivery-app-frontend-chi.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
*/
