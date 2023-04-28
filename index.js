const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000

app.set("view engine", 'ejs')

app.get('/', (req, res)=> {
  res.render('Home')
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
})