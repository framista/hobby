const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/key', async(req, res) => {
    console.log(process.env)
    console.log(process.env.API_KEY)
    res.send(process.env.API_KEY)
})